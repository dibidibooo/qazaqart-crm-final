<!-- PageQazaqart -->
<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between align-items-center">
      <b-card-title tag="h4">Продажи</b-card-title>
      <div>
        <b-button variant="outline-light" size="sm" class="me-1">Общий</b-button>
        <b-button variant="outline-light" size="sm" class="me-1">Месяц</b-button>
        <b-button variant="outline-light" size="sm" class="me-1">Полгода</b-button>
        <b-button variant="outline-light" size="sm" class="active">Год</b-button>
      </div>
    </b-card-header>

    <b-card-body>
      <div dir="ltr">
        <ApexChart :chart="overviewChart" class="apex-charts" />
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import ApexChart from '@/components/ApexChart.vue'
import { overviewChart } from '@/views/dashboards/sales/components/data'
</script>
