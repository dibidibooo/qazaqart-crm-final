<template>
  <b-card no-body class="overflow-hidden">
    <b-card-body>
      <div class="d-flex flex-wrap justify-content-between gap-3">
        <div>
          <download-excel :data="json_data" type="xls" name="qazaqart" style="cursor: pointer;"
            class="btn btn-primary d-flex align-items-center">
            Скачать excel
          </download-excel>
        </div>
      </div>
    </b-card-body>
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
        <b-tr v-for="(author, idx) in props.authorList.results" :key="idx">
          <b-td>
            <div class="d-flex align-items-center gap-1">
              <img :src="author.photo" alt="avatar-1" class="img-fluid avatar-xs rounded-circle avatar-border me-1" />{{
                author.user.username }}
            </div>
          </b-td>
          <b-td>{{ author.user.first_name }}</b-td>
          <b-td>{{ author.user.last_name }}</b-td>
          <b-td>{{ author.user.email }}</b-td>
          <b-td>{{ author.phone }}</b-td>
          <b-td>{{ author.order_count ? author.order_count : 0 }}</b-td>
          <b-td>{{ author.revenue }} KZT</b-td>
          <b-td>{{ author.iin ? author.iin : 'не заполнено' }}</b-td>
          <b-td>{{ author.iban ? author.iban : 'не заполнено' }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <div class="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
      <div class="col-sm">
        <div class="text-muted">
          Показано
          <span class="fw-semibold">{{ props.authorList.results.length }}</span>
          из
          <span class="fw-semibold">{{ props.authorList.count }}</span>
          Результатов
        </div>
      </div>
      <div class="col-sm-auto mt-3 mt-sm-0">
        <b-pagination @click="changePage" class="m-0" pills size="md" v-model="currentPage" :per-page="perPageItem"
          :total-rows="props.authorList.count" />
      </div>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const perPageItem = ref(20)
const currentPage = ref(1)
const allList = ref([])

const props = defineProps({
  authorList: {
    type: Object,
    default: () => { }
  },
  allAuthor: {
    type: Object,
    default: () => []
  }
})

const emits = defineEmits(['change-page'])

function changePage() {
  emits('change-page', currentPage.value)
}

const json_data = computed(() => {
  const arr: any[] = []
  props.allAuthor.forEach(elem => {
    arr.push({
      ['Пользователь']: elem.user.username,
      ['ФИО']: `${elem.user.first_name} ${elem.user.last_name}`,
      ['Email']: elem.user.email,
      ['Телефон']: elem.phone,
      ['Заказы']: elem.order_count ? elem.order_count : 0,
      ['Выручка']: elem.revenue,
      ['ИИН']: elem.iin,
      ['IBAN']: elem.iban
    })
  })
  return arr
})
</script>
