<template>
  <DefaultLayout>
    <PageBreadcrumb title="Orders List" subtitle="Ecommerce" />
    <b-row>
      <b-col>
        <b-card no-body>
          <b-card-body>
            <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
              <div class="search-bar">
                <span><i class="bx bx-search-alt"></i></span>
                <b-form-input type="search" id="search" placeholder="Search..." />
              </div>

              <div class="d-flex flex-wrap gap-2 justify-content-end">
                <b-dropdown :variant="null" toggle-class="btn-light" menu-class="dropdown-menu-end">
                  <template #button-content> <i class="bx bx-sort me-1" />Filter </template>
                  <b-dropdown-item>By Date</b-dropdown-item>
                  <b-dropdown-item>By Order ID</b-dropdown-item>
                  <b-dropdown-item>By Status</b-dropdown-item>
                </b-dropdown>
                <a href="#!" class="btn btn-primary"> <i class="bx bx-plus me-1"></i>Create Contact </a>
              </div>
            </div>
          </b-card-body>
          <download-excel name="qazaqart" :data="excelList" style="cursor: pointer;">
            Скачать excel
          </download-excel>
          <b-table-simple responsive class="text-nowrap table-centered mb-0">
            <b-thead class="bg-light bg-opacity-50">
              <b-tr>
                <b-th v-for="(thead, idx) in orderList.header" :key="idx">{{ thead }}</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(order, idx) in productList" :key="idx">
                <b-td>
                  {{ order.desc.order }}
                  <!-- <router-link :to="{ name: 'ecommerce.orders.details', params: { id: order.orderID } }">#{{ order.orderID }} </router-link> -->
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
                  <b-button @click="deleteProductData(order.id)" type="button" :variant="null" size="sm" class="btn-soft-danger ms-1">
                    <i class="bx bx-trash fs-18"></i>
                  </b-button>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <div class="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
            <div class="col-sm">
              <div class="text-muted">
                Showing
                <span class="fw-semibold">10</span>
                of
                <span class="fw-semibold">90,521</span>
                orders
              </div>
            </div>
            <div class="col-sm-auto mt-3 mt-sm-0">
              <b-pagination class="m-0" pills v-model="currentPage" :per-page="perPageItem" :total-rows="orderList.body.length" />
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
const excelList = ref<any[]>([])
const authorList = ref<any[]>([])

const axios: any = inject('axios')

async function getProductList () {
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

async function deleteProductData (id: Number) {
  await axios.delete(`https://dbqazaqart.kz/api/product/delete/${id}/`)
    .then(() => {
      getProductList()
    })
    .catch((error: { data: any }) => {
      console.log(error)
    })
}

function parseList () {
  productList.value.forEach(elem => {
    excelList.value.push({
      ['Продавец']: elem.art.seller.user.username,
      ['Название']: elem.art.name,
      ['Дата']: elem.data,
      ['Цена']: elem.price,
      ['Описание']: `Адрес: ${elem.desc.address}, количество: ${elem.desc.count}, размер: ${elem.desc.size[0].merchSize}, цвет: ${elem.desc.color}, категория: ${elem.desc.category[0]}`,
      ['Покупатель']: elem.buyer.user.username,
      ['Телефон']: elem.buyer.phone
    })
  })
}

onMounted(() => {
  getProductList()
})
</script>
