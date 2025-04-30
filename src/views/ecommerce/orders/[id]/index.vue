<template>
  <DefaultLayout>
    <PageBreadcrumb title="Детали заказа" subtitle="Заказы мерча" />
    <b-row>
      <ProductDetails :id="route.params.id" />
      <OrderDescription :id="route.params.id" />
    </b-row>

    <b-row>
      <ShippingInformation />
      <!-- <BillingInformation />
      <DeliveryInformation :id="route.params.id" /> -->
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import ProductDetails from '@/views/ecommerce/orders/components/ProductDetails.vue'
import OrderDescription from '@/views/ecommerce/orders/components/OrderDescription.vue'
// import BillingInformation from '@/views/ecommerce/orders/components/BillingInformation.vue'
// import DeliveryInformation from '@/views/ecommerce/orders/components/DeliveryInformation.vue'
import ShippingInformation from '@/views/ecommerce/orders/components/ShippingInformation.vue'

import { useRoute } from 'vue-router'

const route = useRoute()
</script>
