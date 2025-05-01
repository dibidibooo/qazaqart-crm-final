<template>
  <b-col xl="5">
    <b-card no-body>
      <b-card-body>
        <b-card-title tag="h5" class="mb-3"> Информация о покупателе заказа #{{ product.id }} </b-card-title>
        <b-table-simple responsive class="text-nowrap table-centered mb-0">
          <tbody>
            <tr>
              <td>Имя Фамилия :</td>
              <td>{{product?.buyer?.user.first_name}} {{product?.buyer?.user.last_name}}</td>
            </tr>
            <tr>
              <td>Email :</td>
              <td>{{product?.buyer?.user.email}}</td>
            </tr>
            <tr>
              <td>Телефон :</td>
              <td>{{product?.buyer?.phone}}</td>
            </tr>
            <tr>
              <td class="fw-semibold">Адрес :</td>
              <td class="fw-semibold">{{desc.address}}</td>
            </tr>
          </tbody>
        </b-table-simple>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants'

defineProps(['product', 'desc'])
</script>
