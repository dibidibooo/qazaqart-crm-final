<!-- PageQazaqart -->
<template>
  <DefaultLayout>
    <PageBreadcrumb title="Статистика Продаж" subtitle="Dashboards" />

    <b-row>
      <div v-for="(item, idx) in statistics" :key="idx" class="col-xl" :class="idx === 4 ? 'col-lg-6 col-md-12' : idx === 3 ? 'col-lg-6 col-md-6' : 'col-lg-4 col-md-6'">
        <StatisticsCard :item="item" />
      </div>
    </b-row>

    <b-row>
      <b-col xxl="8">
        <Overview />
      </b-col>

      <b-col xxl="4">
        <SalesByCategory />
      </b-col>
    </b-row>

  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import StatisticsCard from '@/views/dashboards/sales/components/StatisticsCard.vue'
import Overview from '@/views/dashboards/sales/components/Overview.vue'
import SalesByCategory from '@/views/dashboards/sales/components/SalesByCategory.vue'
import { statistics } from '@/views/dashboards/sales/components/data'
</script>
