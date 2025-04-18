<!-- PageQazaqart -->
<template>
  <DefaultLayout>
    <PageBreadcrumb title="Страница магазина" subtitle="Магазин" />
    <b-row>
      <b-col>
        <b-card no-body>
          <b-card-body>
            <div class="d-flex flex-wrap justify-content-between gap-3">
              <div>
                <router-link :to="{ name: 'ecommerce.products.create' }" class="btn btn-primary d-flex align-items-center"> <i class="bx bx-plus me-1"></i>Добавить товар</router-link>
              </div>
            </div>
          </b-card-body>
          <div>
            <b-table-simple responsive class="table-centered text-nowrap mb-0">
              <b-thead class="bg-light bg-opacity-50">
                <b-tr>
                  <b-th v-for="(thead, idx) in products.header" :key="idx">{{ thead }}</b-th>
                </b-tr>
              </b-thead>

              <b-tbody>
                <b-tr v-for="(product, idx) in shopList.results" :key="idx">
                  <b-td>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-3">
                        <router-link :to="{ name: 'ecommerce.products.details', params: { id: product.id } }">
                          <img :src="product.picture" alt="product-1(1)" class="img-fluid avatar-sm" />
                        </router-link>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="mt-0 mb-1">
                          <router-link :to="{ name: 'ecommerce.products.details', params: { id: product.id } }" class="text-reset">
                            {{ product.name }}
                          </router-link>
                        </h5>
                        <span class="fs-13 truncated-text">{{ product.desc }}</span>
                      </div>
                    </div>
                  </b-td>
                  <b-td>{{ sizeSign(product.size) }}</b-td>
                  <b-td>{{ product.color }}</b-td>
                  <b-td>{{ categorySet(product.category) }}</b-td>
                  <b-td>{{ product.price }} KZT</b-td>
                  <b-td :class="product.isHave ? 'text-success' : 'text-danger'">
                    <i class="bx bxs-circle me-1" :class="product.isHave ? 'text-success' : 'text-danger'"></i>
                    <p>{{ product.isHave ? 'В наличии' : 'Не в наличии' }}</p>
                  </b-td>
                  <b-td>
                    <b-button type="button" :variant="null" size="sm" class="btn-soft-secondary me-1">
                      <i class="bx bx-edit fs-18"></i>
                    </b-button>
                    <b-button @click="openModal(product.id)" type="button" :variant="null" size="sm" class="btn-soft-danger ms-1">
                      <i class="bx bx-trash fs-18"></i>
                    </b-button>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>

            <div class="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
              <div class="col-sm">
                <div class="text-muted">
                  Показаны
                  <span class="fw-semibold">{{ shopList.results.length }}</span>
                  из
                  <span class="fw-semibold">{{ shopList.count }}</span>
                  результатов
                </div>
              </div>
              <div class="col-sm-auto mt-3 mt-sm-0">
                <b-pagination @click="getShopItem" class="m-0" pills size="md" v-model="currentPage" :per-page="perPageItem" :total-rows="shopList.count" />
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <ModalComponent
      v-if="isModal"
      type="delete"
      @close-modal="closeModal"
      @agree-action="deleteShopItem"/>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, computed } from 'vue'
import ModalComponent from '@/components/ModalComponent.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { kebabToTitleCase } from '@/helpers/change-casing'
// import { currency } from '@/helpers/constants'
import { products } from '@/views/ecommerce/products/components/data2'

const perPageItem = ref(20)
const currentPage = ref(1)
const isModal = ref<boolean>(false)
const deleted = ref<Number>()

const shopList = ref({
  count: null,
  next: null,
  prevoius: null,
  results: []
})

function openModal (id: Number) {
  deleted.value = id
  isModal.value = true
}

function closeModal () {
  isModal.value = false
}

const axios: any = inject('axios')

async function getShopItem () {
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  await axios.get(`https://dbqazaqart.kz/api/item/get/?page=${currentPage.value}`)
    .then((response: { data: any }) => {
      shopList.value = response.data
    })
    .catch((error: { data: any }) => {
      console.log(error)
    })
}

async function deleteShopItem () {
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  await axios.delete(`https://dbqazaqart.kz/api/item/delete/${deleted.value}/`)
    .then((response: { data: any }) => {
      getShopItem()
      closeModal()
    })
    .catch((error: { data: any }) => {
      console.log(error)
    })
}

function sizeSign(choice: String): String {
  if (choice === '0') {
    return 'S'
  } else if (choice === '1') {
    return 'M'
  } else if (choice === '2') {
    return 'L'
  } else if (choice === '3') {
    return 'XL'
  } else {
    return 'XXL'
  }
}

function categorySet(choice: String): String {
  if (choice === '0') {
    return 'Худи'
  } else if (choice === '1') {
    return 'Свитшот'
  } else {
    return 'Футболка'
  }
}

onMounted(() => {
  getShopItem()
})
</script>

<style scoped>
.truncated-text {
  display: inline-block;
  max-width: 100px; /* или другое подходящее значение */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
