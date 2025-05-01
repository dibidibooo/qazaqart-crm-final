<template>
  <DefaultLayout>
    <PageBreadcrumb title="Список заказов" subtitle="Заказы мерча" />
    <b-row>
      <b-col>
        <b-card no-body>
          <b-card-body>
            <div class="d-flex flex-wrap justify-content-between gap-3">
              <div>
                <download-excel name="qazaqart" :data="excelList" style="cursor: pointer;"
                  class="btn btn-primary d-flex align-items-center">
                  Скачать excel
                </download-excel>
              </div>
            </div>
          </b-card-body>

          <b-table-simple responsive class="text-nowrap table-centered mb-0">
            <b-thead class="bg-light bg-opacity-50">
              <b-tr>
                <b-th v-for="(thead, idx) in orderList.header" :key="idx">{{ thead }}</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(order, idx) in productPageList.results" :key="idx">
                <b-td>
                  <router-link :to="{ name: 'ecommerce.orders.details', params: { id: order.id } }">
                    {{ order.order }}
                  </router-link>
                </b-td>
                <b-td>{{ order.data }}</b-td>
                <b-td>
                  <img :src="order.art.photo_low_quality" alt="product-1(1)" class="img-fluid avatar-sm" />
                </b-td>
                <b-td>{{ order.desc.category }}</b-td>
                <b-td>
                  <ul style="list-style-type: none;">
                    <li v-for="(item, index) in order.desc.size" :key="item + index">
                      <p>{{ item.merchSize }}: {{ item.merchAmount }}</p>
                    </li>
                  </ul>
                </b-td>
                <b-td>{{ order.desc.color }}</b-td>
                <b-td>{{ order.desc.count }}</b-td>
                <b-td>{{ order.price }} KZT</b-td>
                <b-td>
                  <a href="#!">{{ order.buyer.user.first_name }} {{ order.buyer.user.last_name }}</a>
                </b-td>
                <b-td>{{ order.buyer.user.email }}</b-td>
                <b-td>{{ order.buyer.phone }}</b-td>
                <b-td>{{ order.desc.address }}</b-td>
                <b-td>
                  <b-form-select
                    v-model="order.status"
                    :options="statusOptions"
                    class="status-select"
                    :class="`status-${order.status || 'new'}`"
                    @change="updateStatus(order)"
                  ></b-form-select>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <div class="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
            <div class="col-sm">
              <div class="text-muted">
                Показаны
                <span class="fw-semibold">{{ productPageList.results.length }}</span>
                из
                <span class="fw-semibold">{{ productPageList.count }}</span>
                заказов
              </div>
            </div>
            <div class="col-sm-auto mt-3 mt-sm-0">
              <b-pagination class="m-0" pills v-model="currentPage" :per-page="perPageItem"
                :total-rows="productPageList.count" />
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { kebabToTitleCase } from '@/helpers/change-casing'
import { orderList } from '@/views/ecommerce/orders/components/data'

const perPageItem = ref(5)
const currentPage = ref(1)

const productList = ref<any[]>([])
const productPageList = ref({
  count: '',
  next: '',
  previuos: '',
  results: []
})
const excelList = ref<any[]>([])
const authorList = ref<any[]>([])

const statusOptions = ref([
  { value: 'new', text: 'Новый заказ' },
  { value: 'in_progress', text: 'В работе' },
  { value: 'revision', text: 'На доработке' },
  { value: 'completed_success', text: 'Завершено успешно' },
  { value: 'completed_failed', text: 'Завершено неуспешно' },
  { value: 'archived', text: 'Архив' }
])

const axios: any = inject('axios')

async function updateStatus(order: any) {
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  try {
    await axios.patch(`https://dbqazaqart.kz/api/product/update/${order.id}/`, {
      status: order.status
    })
    // Можно добавить уведомление об успешном обновлении
  } catch (error) {
    console.error('Ошибка при обновлении статуса:', error)
    // Можно добавить уведомление об ошибке
  }
}

async function getProductList() {
  await axios.get('https://dbqazaqart.kz/api/product/get/')
    .then((response: { data: any }) => {
      response.data.forEach((elem: any) => {
        elem.desc = JSON.parse(elem.desc)
        elem.desc.size = JSON.parse(elem.desc.size)
      })
      productList.value = response.data
      parseList()
    })
    .catch((error: { data: any }) => {
      console.log('<>', error)
    })
}

async function getProductPageList() {
  await axios.get('https://dbqazaqart.kz/api/product/get-page/')
    .then((response: { data: any }) => {
      response.data.results.forEach((elem: any) => {
        elem.desc = JSON.parse(elem.desc)
        elem.desc.size = JSON.parse(elem.desc.size)
      })
      productPageList.value = response.data
    })
    .catch((error: { data: any }) => {
      console.log('<>', error)
    })
}

async function deleteProductData(id: Number) {
  await axios.delete(`https://dbqazaqart.kz/api/product/delete/${id}/`)
    .then(() => {
      getProductList()
    })
    .catch((error: { data: any }) => {
      console.log(error)
    })
}

function parseList() {
  productList.value.forEach(elem => {
    excelList.value.push({
      ['Заказ']: elem.order,
      ['Продавец']: elem.art.seller.user.username,
      ['Название']: elem.art.name,
      ['Ссылки']: `Плохое качество: ${elem.art.photo_low_quality}; Хорошее качество:${elem.art.photo}`,
      ['Дата']: elem.data,
      ['Цена']: elem.price,
      ['Описание']: `Адрес: ${elem.desc.address}, количество: ${elem.desc.count}, размер: ${elem.desc.size[0].merchSize}, цвет: ${elem.desc.color}, категория: ${elem.desc.category[0]}`,
      ['Покупатель']: `${elem.buyer.user.first_name} ${elem.buyer.user.last_name}`,
      ['Почта']: elem.buyer.user.email,
      ['Телефон']: elem.buyer.phone,
      ['Статус']: statusOptions.value.find(s => s.value === (elem.status || 'new'))?.text
    })
  })
}

onMounted(() => {
  getProductList()
  getProductPageList()
})
</script>

<style scoped>
.status-select {
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  max-width: 200px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 16px 12px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='white' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
}

.status-new {
  background-color: #A0A0A0;
  color: white;
}
.status-in_progress {
  background-color: #3B82F6;
  color: white;
}
.status-revision {
  background-color: #F97316;
  color: white;
}
.status-completed_success {
  background-color: #22C55E;
  color: white;
}
.status-completed_failed {
  background-color: #EF4444;
  color: white;
}
.status-archived {
  background-color: #6B7280;
  color: white;
}

.status-select:hover,
.status-select:focus {
  filter: brightness(90%);
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.status-select option {
  color: #333;
  background-color: white;
  padding: 0.5rem;
}
</style>