<template>
  <DefaultLayout>
    <PageBreadcrumb title="Детали заказа" subtitle="Заказы мерча" />
    <b-row>
      <ProductDetails :product="product" :desc="desc"/>
      <OrderDescription :product="product" :desc="desc"/>
    </b-row>

    <b-row>
      <ShippingInformation :product="product"/>
      <!-- <BillingInformation />
      <DeliveryInformation :id="route.params.id" /> -->
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import ProductDetails from '@/views/ecommerce/orders/components/ProductDetails.vue'
import OrderDescription from '@/views/ecommerce/orders/components/OrderDescription.vue'
// import BillingInformation from '@/views/ecommerce/orders/components/BillingInformation.vue'
// import DeliveryInformation from '@/views/ecommerce/orders/components/DeliveryInformation.vue'
import ShippingInformation from '@/views/ecommerce/orders/components/ShippingInformation.vue'

import { useRoute } from 'vue-router'
const axios: any = inject('axios')

const route = useRoute()

const product = ref({ })
const desc = ref({ })

async function getProduct() {
  const token = JSON.parse(sessionStorage.getItem('QAZAQART_VUE_USER') || '{}')
  axios.defaults.headers.common.Authorization = `Bearer  ${token?.token}`
  await axios.get(`https://dbqazaqart.kz/api/product/get/${route.params.id}`)
    .then((response: { data: any }) => {
      product.value = response.data[0]
      parseDesc(response.data[0])
    })
    .catch((error: { data: any }) => {
      console.log('<>', error)
    })
}

const parseDesc = (obj: any) => {
  desc.value = JSON.parse(obj.desc)
}

getProduct()
</script>
