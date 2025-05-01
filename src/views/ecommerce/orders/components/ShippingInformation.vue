<template>
  <b-col lg="4">
    <b-card no-body class="card-height-100">
      <b-card-body>
        <b-card-title tag="h5" class="mb-3"> Информация о картинке </b-card-title>
        <h5 class="">Автор: {{product.art.seller.user.first_name}} {{product.art.seller.user.last_name}}</h5>
        <p class="mb-0">
          <p title="description">Название картины : {{product.art.name}}</p>
          <p title="description">Ссылка на оригинал фото : https://dbqazaqart.kz{{product.art.photo}}</p>
          <p title="description">Ссылка на фото с водяным знаком : https://dbqazaqart.kz{{product.art.photo_low_quality}}</p>
        </p>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script setup lang="ts">
defineProps(['product'])
</script>
