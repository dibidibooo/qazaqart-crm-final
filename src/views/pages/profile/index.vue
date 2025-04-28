<template>
  <DefaultLayout>
    <PageBreadcrumb title="Профиль" subtitle="Основное" />
    <b-row>
      <b-col xxl="4">
        <b-row>
          <b-col cols="12">
            <ProfileInfo />
          </b-col>
        </b-row>
      </b-col>

      <Messages />
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import Messages from '@/views/pages/profile/components/Messages.vue'
import ProfileInfo from '@/views/pages/profile/components/ProfileInfo.vue'
</script>
