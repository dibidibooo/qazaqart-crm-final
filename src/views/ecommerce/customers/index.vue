<template>
  <DefaultLayout>
    <PageBreadcrumb title="Оплата за мерч" subtitle="Ecommerce" />


    <div class="tab-content pt-0">
      <div class="tab-pane" id="team-list" :class="customersTab && 'show active'">
        <List />
      </div>

      <div class="tab-pane" id="team-grid" :class="!customersTab && 'show active'">
        <Grid />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import List from '@/views/ecommerce/customers/components/List.vue'
import Grid from '@/views/ecommerce/customers/components/Grid.vue'
import { customerList } from '@/views/ecommerce/customers/components/data'


const customersTab = ref(true)
const perPageItem = ref(5)
const currentPage = ref(1)

</script>
