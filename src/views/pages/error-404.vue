<template>
  <AuthLayout>
    <b-col xl="12">
      <b-card no-body class="auth-card">
        <b-card-body class="p-0">
          <b-row class="align-items-center g-0">
            <b-col lg="6" class="d-none d-lg-inline-block border-end">
              <div class="auth-page-sidebar">
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="auth" class="img-fluid" />
              </div>
            </b-col>
            <b-col lg="6">
              <div class="p-4">
                <div class="mx-auto mb-4 text-center">
                  <div class="mx-auto text-center auth-logo">
                    <LogoBox />
                  </div>

                  <h1 class="mt-5 mb-3 fw-bold fs-60">404</h1>
                  <h2 class="fs-22 lh-base">Страница не найдена !</h2>
                  <p class="text-muted mt-1 mb-4">
                    Страница, на которую вы пытаетесь попасть, 
                    <br />
                    по-видимому, затерялась в цифровых просторах.
                  </p>

                  <div class="text-center">
                    <router-link to="/" class="btn btn-success">Вернуться</router-link>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import LogoBox from '@/components/LogoBox.vue'
</script>
