<template>
  <b-card no-body class="overflow-hidden">
    <b-table-simple responsive class="text-nowrap table-centered mb-0">
      <b-thead>
        <b-tr>
          <b-th>Пользователь</b-th>
          <b-th>Email</b-th>
          <b-th>Телефон</b-th>
          <b-th>Заказы</b-th>
          <b-th>Выручка</b-th>
          <b-th>Действие</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(customer, idx) in customerList" :key="idx">
          <b-td>
            <div class="d-flex align-items-center gap-1">
              <img :src="customer.image" alt="avatar-1" class="img-fluid avatar-xs rounded-circle avatar-border me-1" />
              <a href="#!">{{ customer.name }}</a>
            </div>
          </b-td>
          <b-td>{{ customer.email }}</b-td>
          <b-td>{{ customer.phone }}</b-td>
          <b-td>{{ customer.orders }}</b-td>
          <b-td>{{ customer.revenue }} KZT</b-td>
          <b-td>
            <b-td><a href="#!" class="btn btn-primary btn-sm w-100">Оплатить за мерч</a></b-td>


          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <div class="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
      <div class="col-sm">
        <div class="text-muted">
          Показано
          <span class="fw-semibold">10</span>
          из
          <span class="fw-semibold">285</span>
          Результатов
        </div>
      </div>
      <div class="col-sm-auto mt-3 mt-sm-0">
        <b-pagination class="m-0" pills v-model="currentPage" :per-page="perPageItem" :total-rows="customerList.length" />
      </div>
    </div>
  </b-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { customerList } from '@/views/ecommerce/customers/components/data'

const perPageItem = ref(5)
const currentPage = ref(1)
</script>
