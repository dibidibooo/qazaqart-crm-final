<template>
  <DefaultLayout>
    <PageBreadcrumb title="Оплата за мерч" subtitle="Страницы" />


    <div class="tab-content pt-0">
      <div class="tab-pane" id="team-list" :class="customersTab && 'show active'">
        <List :authorList="authorList"/>
      </div>

      <div class="tab-pane" id="team-grid" :class="!customersTab && 'show active'">
        <Grid />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import List from '@/views/ecommerce/customers/components/List.vue'
import Grid from '@/views/ecommerce/customers/components/Grid.vue'
import { customerList } from '@/views/ecommerce/customers/components/data'

const axios: any = inject('axios')

const authorList = ref<any[]>([])
const customersTab = ref(true)
const perPageItem = ref(5)
const currentPage = ref(1)

async function getSeller () {
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  await axios.get('https://dbqazaqart.kz/api/get-sellers-pag/')
    .then((response: { data: any }) => {
      authorList.value = response.data
    })
    .catch((error: { data: any }) => {
      console.log('<>', error)
    })
}

async function checkIbanIin () {
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  await axios.get('http://127.0.0.1:8000/api/check-seller/iban/iin/11/')
    .then((response: { data: any }) => {
      console.log(response.data)
    })
    .catch((error: { data: any }) => {
      console.log('<>', error)
    })
}

onMounted(() => {
  getSeller()
  checkIbanIin()
})
</script>
