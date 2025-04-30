<template>
  <b-col xxl="8">
    <b-row>
      <PersonalInfo :profile="props.profile"/>
    </b-row>
    <b-row>
    </b-row>
  </b-col>
</template>
<script setup lang="ts">
import PersonalInfo from '@/views/pages/profile/components/PersonalInfo.vue'

const props = defineProps({
  profile: {
    type: Object
  }
})
</script>
