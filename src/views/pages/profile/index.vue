<template>
  <DefaultLayout>
    <PageBreadcrumb title="Профиль" subtitle="Основное" />
    <b-row>
      <b-col xxl="4">
        <b-row>
          <b-col cols="12">
            <ProfileInfo :profile="profile"/>
          </b-col>
        </b-row>
      </b-col>

      <Messages :profile="profile"/>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import Messages from '@/views/pages/profile/components/Messages.vue'
import ProfileInfo from '@/views/pages/profile/components/ProfileInfo.vue'

const axios: any = inject('axios')

const profile = ref({ })

async function getProfile () {
  console.log('okok')
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  await axios.get('https://dbqazaqart.kz/api/get/profile/')
    .then((response: { data: any }) => {
      profile.value = response.data[0]
    })
    .catch((error: { data: any }) => {
      console.log('<>', error)
    })
}

getProfile()
</script>
