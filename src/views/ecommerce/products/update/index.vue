<!-- PageQazaqart -->
<template>
  <DefaultLayout>
    <PageBreadcrumb title="Добавить товар" subtitle="Магазин" />
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
              <div class="tab-pane" :class="productTab === 2 && 'show active'" id="finish">
                <Finish />
              </div>
              <div class="d-flex flex-wrap gap-2 wizard justify-content-between mt-3">
                <div class="first d-none">
                  <a href="javascript:void(0);" class="btn btn-primary"> First </a>
                </div>
                <div class="next">
                  <a href="javascript:void(0);" class="btn btn-primary" @click="check"> Сохранить<i class="bx bx-right-arrow-alt ms-2"></i> </a>
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
    <ModalComponent
      v-if="isModal"
      :type="status"
      @close-modal="closeModal"/>
    <PreLoader v-if="preloader"/>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'

import ModalComponent from '@/components/ModalComponent.vue'
import PreLoader from '@/components/PreLoader.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import GeneralDetail from '@/views/ecommerce/products/create/components/GeneralDetail.vue'
import ProductImages from '@/views/ecommerce/products/create/components/ProductImages.vue'
import Finish from '@/views/ecommerce/products/create/components/Finish.vue'
import router from '@/router'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const productTab = ref<number>(1)
const isModal = ref<boolean>(false)
const preloader = ref<boolean>(false)
const status = ref<string>('')
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

function openModal () {
  isModal.value = true
}

function closeModal () {
  isModal.value = false
}

const itemShop = function (object: any) {
  shopItem.value = object
}

const axios: any = inject('axios')

async function setShopItem () {
  preloader.value = true
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  await axios.post(`https://dbqazaqart.kz/api/item/update/${}/`)
    .then((response: { data: any }) => {
      console.log(response.data)
      preloader.value = false
    })
    .catch((error: { data: any }) => {
      console.log(error)
      preloader.value = false
    })
}
</script>
