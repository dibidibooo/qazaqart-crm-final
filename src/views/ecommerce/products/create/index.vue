<!-- PageQazaqart -->
<template>
  <DefaultLayout>
    <PageBreadcrumb title="Добавить товар" subtitle="Ecommerce" />
    <b-row>
      <b-col>
        <b-card no-body id="horizontalwizard">
          <b-card-header>
            <ul class="nav nav-tabs card-header-tabs border-0">
              <li class="nav-item">
                <a href="#" class="nav-link pb-3" :class="productTab === 1 && 'active'" @click="productTab = 1">
                  <i class="bx bxs-contact me-2" />
                  <span class="d-none d-sm-inline">Общая информация</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link pb-3" :class="productTab === 2 && 'active'" @click="productTab = 2">
                  <i class="bx bx-images me-2" />
                  <span class="d-none d-sm-inline">Изображение</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link pb-3" :class="productTab === 3 && 'active'" @click="productTab = 3">
                  <i class="bx bxs-check-circle me-2" />
                  <span class="d-none d-sm-inline">Завершение загрузки</span>
                </a>
              </li>
            </ul>
          </b-card-header>
          <b-card-body>
            <div class="tab-content pt-0">
              <div class="tab-pane" :class="productTab === 1 && 'show active'" id="generalDetail">
                <GeneralDetail @set-main-data="itemShop"/>
              </div>
              <div class="tab-pane" :class="productTab === 2 && 'show active'" id="productImages">
                <ProductImages @set-img="itemShopImg"/>
              </div>
              <div class="tab-pane" :class="productTab === 3 && 'show active'" id="finish">
                <Finish />
              </div>
              <div class="d-flex flex-wrap gap-2 wizard justify-content-between mt-3">
                <div class="first d-none">
                  <a href="javascript:void(0);" class="btn btn-primary"> First </a>
                </div>
                <div class="previous me-2">
                  <a href="javascript:void(0);" class="btn btn-primary" :class="productTab === 1 && 'disabled'" @click="productTab = productTab - 1"> <i class="bx bx-left-arrow-alt me-2"></i>Назад </a>
                </div>
                <div class="next">
                  <a v-if="productTab !== 3" href="javascript:void(0);" class="btn btn-primary" :class="productTab === 3 && 'disabled'" @click="productTab = productTab + 1"> Вперед<i class="bx bx-right-arrow-alt ms-2"></i> </a>
                  <a v-else href="javascript:void(0);" class="btn btn-primary" @click="setShopItem"> Сохранить<i class="bx bx-right-arrow-alt ms-2"></i> </a>
                </div>
                <div class="last d-none">
                  <a href="javascript:void(0);" class="btn btn-primary"> Завершить </a>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import GeneralDetail from '@/views/ecommerce/products/create/components/GeneralDetail.vue'
import ProductImages from '@/views/ecommerce/products/create/components/ProductImages.vue'
import Finish from '@/views/ecommerce/products/create/components/Finish.vue'

const productTab = ref<number>(1)
const shopItem = ref({
  name: '',
  color: '',
  desc: '',
  category: '',
  size: '',
  price: 0,
  isHave: false,
  picture: ''
})

const itemShop = function (object: any) {
  shopItem.value = object
}

const itemShopImg = function (object: any) {
  shopItem.value.picture = object
}

const axios: any = inject('axios')

async function setShopItem () {
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  const formData:any = new FormData()
  formData.append('name', shopItem.value.name)
  formData.append('color', shopItem.value.color)
  formData.append('desc', shopItem.value.desc)
  formData.append('category', shopItem.value.category)
  formData.append('size', shopItem.value.size)
  formData.append('price', shopItem.value.price)
  formData.append('isHave', shopItem.value.isHave)
  formData.append('picture', shopItem.value.picture)
  await axios.post(`https://dbqazaqart.kz/api/item/create/`, formData)
    .then((response: { data: any }) => {
      console.log('ok')
    })
    .catch((error: { data: any }) => {
      console.log(error)
    })
}
</script>
