<template>
  <DefaultLayout>
    <PageBreadcrumb title="Заказы с магазина" subtitle="Магазин" />
    <b-row>
      <b-col>
        <b-card no-body>
          <b-card-body>
            <div class="d-flex flex-wrap justify-content-between gap-3">
              <div>
                <download-excel
            :data="json_data"
            type="xls"
            style="cursor: pointer;" class="btn btn-primary d-flex align-items-center">
            Скачать excel
          </download-excel>

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
                <b-tr v-for="(product, idx) in shopList" :key="idx">
                  <b-td>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-3">
                        <router-link :to="{ name: 'ecommerce.products.details', params: { id: product.id } }">
                          <img :src="product.item.picture" alt="product-1(1)" class="img-fluid avatar-sm" />
                        </router-link>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="mt-0 mb-1">
                          <router-link :to="{ name: 'ecommerce.products.details', params: { id: product.id } }" class="text-reset">
                            {{ product.item.name }}
                          </router-link>
                        </h5>
                        <span class="fs-13">{{ product.item.desc }}</span>
                      </div>
                    </div>
                  </b-td>
                  <b-td>{{ sizeSign(product.item.size) }}</b-td>
                  <b-td>{{ product.item.color }}</b-td>
                  <b-td>{{ categorySet(product.item.category) }}</b-td>
                  <b-td>{{ product.item.price }} KZT</b-td>
                  <b-td>{{ product.buyer.user.username }}</b-td>
                  <b-td>{{ product.buyer.phone }}</b-td>
                  <b-td>{{ product.buyer.user.email }}</b-td>
                  <b-td>{{ product.desc }}</b-td>
                  <b-td>{{ product.date }}</b-td>
                  <b-td>
                    <b-button type="button" :variant="null" size="sm" class="btn-soft-secondary me-1">
                      <i class="bx bx-edit fs-18"></i>
                    </b-button>
                    <b-button type="button" :variant="null" size="sm" class="btn-soft-danger ms-1">
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
                  <span class="fw-semibold">7</span>
                  из
                  <span class="fw-semibold">15</span>
                  результатов
                </div>
              </div>
              <div class="col-sm-auto mt-3 mt-sm-0">
                <b-pagination class="m-0" pills size="md" v-model="currentPage" :per-page="perPageItem" :total-rows="products.body.length" />
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, computed } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { kebabToTitleCase } from '@/helpers/change-casing'
// import { currency } from '@/helpers/constants'
import { products } from '@/views/ecommerce/products/components/data'

const perPageItem = ref(5)
const currentPage = ref(1)

const shopList = ref<any[]>([])

const json_data = computed(() => {
  const arr: any[] = []
  shopList.value.forEach(elem => {
    arr.push({
      ['Изображение']: elem.item.picture,
      ['Название']: elem.item.name,
      ['Описание']: elem.item.desc,
      ['Размер']: sizeSign(elem.item.size),
      ['Цвет']: elem.item.color,
      ['Категория']: categorySet(elem.item.category),
      ['Цена']: elem.item.price,
      ['Покупатель']: elem.buyer.user.username,
      ['Почта']: elem.buyer.user.email,
      ['Телефон']: elem.buyer.phone,
      ['Дата']: elem.date,
      ['Доп.информация']: elem.desc
    })
  })
  return arr
})

const axios: any = inject('axios')

async function getShopItem () {
  await axios.get(`http://127.0.0.1:8000/api/shop/get/`)
    .then((response: { data: any }) => {
      shopList.value = response.data
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

