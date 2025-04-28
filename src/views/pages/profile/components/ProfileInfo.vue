<template>
  <b-card no-body>
    <div class="position-relative">
      <img :src="img6" alt="" class="card-img rounded-bottom-0" height="200" />
      <img :src="avatar1" alt="" class="avatar-lg rounded-circle position-absolute top-100 start-0 translate-middle-y ms-3 border border-light border-3" />
    </div>
    <b-card-body class="mt-4">
      <div class="">
        <div class="d-flex align-items-center">
          <div class="d-block">
            <h4 class="mb-1">Фамилия Имя</h4>
          </div>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import img6 from '@/assets/images/small/img-6.jpg'
import avatar1 from '@/assets/images/users/avatar-1.jpg'
</script>
