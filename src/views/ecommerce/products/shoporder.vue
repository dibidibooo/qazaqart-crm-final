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
                  style="cursor: pointer;" 
                  class="btn btn-primary d-flex align-items-center"
                >
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
                <b-tr v-for="(product, idx) in shopList.results" :key="idx">
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
                    <b-form-select 
                      v-model="product.status" 
                      :options="statusOptions" 
                      class="status-select"
                      :class="`status-${product.status || 'new'}`"
                      @change="updateStatus(product)"
                    ></b-form-select>
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
                <b-pagination 
                  @click="getShopItem" 
                  class="m-0" 
                  pills 
                  size="md" 
                  v-model="currentPage" 
                  :per-page="perPageItem" 
                  :total-rows="shopList.count" 
                />
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
import { products } from '@/views/ecommerce/products/components/data'

const perPageItem = ref(20)
const currentPage = ref(1)

const shopList = ref({
  count: null,
  next: null,
  prevoius: null,
  results: []
})

const statusOptions = ref([
  { value: 'new', text: 'Новый заказ' },
  { value: 'in_progress', text: 'В работе' },
  { value: 'revision', text: 'На доработке' },
  { value: 'completed_success', text: 'Завершено успешно' },
  { value: 'completed_failed', text: 'Завершено неуспешно' },
  { value: 'archived', text: 'Архив' }
])

const json_data = computed(() => {
  const arr: any[] = []
  shopList.value.results.forEach(elem => {
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
      ['Доп.информация']: elem.desc,
      ['Статус']: statusOptions.value.find(s => s.value === (elem.status || 'new'))?.text
    })
  })
  return arr
})

const axios: any = inject('axios')

async function getShopItem() {
  await axios.get(`https://dbqazaqart.kz/api/shop/get/?page=${currentPage.value}`)
    .then((response: { data: any }) => {
      shopList.value = response.data
      // Инициализация статусов, если они не пришли с сервера
      shopList.value.results.forEach(product => {
        if (!product.status) {
          product.status = 'new'
        }
      })
    })
    .catch((error: { data: any }) => {
      console.log(error)
    })
}

async function updateStatus(product: any) {
  try {
    await axios.patch(`https://dbqazaqart.kz/api/shop/update/${product.id}/`, {
      status: product.status
    })
    // Можно добавить уведомление об успешном обновлении
  } catch (error) {
    console.error('Ошибка при обновлении статуса:', error)
    // Можно добавить уведомление об ошибке
  }
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