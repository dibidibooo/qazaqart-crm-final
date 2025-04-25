<template>
  <b-card no-body class="overflow-hidden">
    <download-excel :data="json_data" type="xls" name="qazaqart" style="cursor: pointer;" class="btn btn-primary d-flex align-items-center">
      Скачать excel
    </download-excel>
    <b-table-simple responsive class="text-nowrap table-centered mb-0">
      <b-thead>
        <b-tr>
          <b-th>Пользователь</b-th>
          <b-th>Имя</b-th>
          <b-th>Фамилия</b-th>
          <b-th>Email</b-th>
          <b-th>Телефон</b-th>
          <b-th>Заказы</b-th>
          <b-th>Выручка</b-th>
          <b-th>ИИН</b-th>
          <b-th>IBAN счет</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(author, idx) in authorList" :key="idx">
          <b-td>
            <div class="d-flex align-items-center gap-1">
              <img :src="`https://dbqazaqart.kz/${author.photo}`" alt="avatar-1"
                class="img-fluid avatar-xs rounded-circle avatar-border me-1" />{{ author.user.username }}
            </div>
          </b-td>
          <b-td>{{author.user.first_name}}</b-td>
          <b-td>{{author.user.last_name}}</b-td>
          <b-td>{{author.user.email}}</b-td>
          <b-td>{{ author.phone }}</b-td>
          <b-td>{{ author.order_count }}</b-td>
          <b-td>{{ author.revenue }} KZT</b-td>
          <b-td>{{author.iin ? author.iin : 'не заполнено'}}</b-td>
          <b-td>{{author.iban ? author.iban : 'не заполнено'}}</b-td>
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
        <b-pagination class="m-0" pills v-model="currentPage" :per-page="perPageItem"
          :total-rows="customerList.length" />
      </div>
    </div>
  </b-card>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { customerList } from '@/views/ecommerce/customers/components/data'

const perPageItem = ref(5)
const currentPage = ref(1)

const props = defineProps({
  authorList: {
    type: Array,
    default: () => []
  }
})

const json_data = computed(() => {
  const arr: any[] = []
  props.authorList.forEach(elem => {
    arr.push({
      ['Пользователь']: elem.user.username,
      ['ФИО']: `${elem.user.first_name} ${elem.user.last_name}`,
      ['Email']: elem.user.email,
      ['Телефон']: elem.phone,
      ['Заказы']: elem.order_count,
      ['Выручка']: elem.revenue,
      ['ИИН']: elem.iin,
      ['IBAN']: elem.iban
    })
  })
  return arr
})
</script>
