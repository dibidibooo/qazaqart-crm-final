<template>
  <DefaultLayout>
    <PageBreadcrumb title="Оплата за мерч" subtitle="Страницы" />


    <div class="tab-content pt-0">
      <div class="tab-pane" id="team-list" :class="customersTab && 'show active'">
        <List
          :authorList="authorList"
          :allAuthor="allAuthor"
          @change-page="changePage"/>
      </div>

      <div class="tab-pane" id="team-grid" :class="!customersTab && 'show active'">
        <Grid />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, inject, reactive } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import List from '@/views/ecommerce/customers/components/List.vue'
import Grid from '@/views/ecommerce/customers/components/Grid.vue'
import { customerList } from '@/views/ecommerce/customers/components/data'

const axios: any = inject('axios')

const authorList = ref({
  count: null,
  next: null,
  prevoius: null,
  results: []
})
const allAuthor = ref([])
const customersTab = ref(true)
const perPageItem = ref(5)
const currentPage = ref(1)

function changePage (page: number) {
  currentPage.value = page
  getSeller()
}

async function getSeller () {
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  await axios.get(`https://dbqazaqart.kz/api/get-sellers-pag/?page=${currentPage.value}`)
    .then((response: { data: any }) => {
      authorList.value = response.data
      authorList.value.results.forEach(item => getRevenue(item))
    })
    .catch((error: { data: any }) => {
      console.log('<>', error)
    })
}

async function getRevenue (obj: any) {
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  await axios.get(`https://dbqazaqart.kz/api/product/revenue/${obj.id}/`)
    .then((response: { data: any }) => {
      obj.revenue = response.data.revenue
    })
    .catch((error: { data: any }) => {
      console.log('<>', error)
    })
}

async function getAllSeller () {
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  await axios.get('https://dbqazaqart.kz/api/get-sellers/')
    .then((response: { data: any }) => {
      allAuthor.value = response.data
      allAuthor.value.forEach(item => getRevenue(item))
    })
    .catch((error: { data: any }) => {
      console.log('<>', error)
    })
}

onMounted(() => {
  getSeller()
  getAllSeller()
})
</script>
