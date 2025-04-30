<template>
  <b-col xl="7">
    <b-card no-body>
      <b-card-body>
        <b-card-title tag="h5" class="mb-3"> Заказ #{{ id }} </b-card-title>
        <b-table-simple responsive class="table-centered table-dashed mb-0">
          <b-thead>
            <b-tr>
              <b-th>Название продукта</b-th>
              <b-th>Размер</b-th>
              <b-th>Цвет</b-th>
              <b-th>Количество</b-th>
              <b-th>Цена</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            
            
            <b-tr>
              <b-td>футболка</b-td>
              <b-td>XL</b-td>
              <b-td>Черный</b-td>
              <b-td>1</b-td>
              <b-td>{Сумма} KZT</b-td>
            </b-tr>

            <!-- Нужно показать другие товары в таком же формате, если он несколько размеров заказал при покупке футболки -->

            <b-tr>
              <b-td>футболка</b-td>
              <b-td>L</b-td>
              <b-td>Черный</b-td>
              <b-td>3</b-td>
              <b-td>{Сумма} KZT</b-td>
            </b-tr>



          </b-tbody>
        </b-table-simple>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants'

defineProps(['id'])
</script>
