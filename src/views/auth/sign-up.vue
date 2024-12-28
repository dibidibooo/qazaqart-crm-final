<template>
  <AuthLayout>
    <b-col xl="12">
      <b-card no-body class="auth-card">
        <b-card-body class="p-0">
          <b-row class="align-items-center g-0">
            <b-col lg="6" class="d-none d-lg-inline-block border-end">
              <div class="auth-page-sidebar">
                <img :src="signInImg" alt="auth" class="img-fluid" />
              </div>
            </b-col>
            <b-col lg="6">
              <div class="p-4">
                <div class="mx-auto mb-4 text-center auth-logo">
                  <LogoBox />
                </div>

                <h2 class="fw-bold text-center fs-18">Регистрация</h2>
                <p class="text-muted text-center mt-1 mb-4">Пройдите регистрацию, чтобы начать работу.</p>

                <b-row class="justify-content-center">
                  <b-col md="8" cols="12">
                    <b-form class="authentication-form">
                      <b-form-group label="Имя пользователя" class="mb-3">
                        <b-form-input type="text" id="example-name" placeholder="Введите свое имя" />
                      </b-form-group>

                      <b-form-group label="Email" class="mb-3">
                        <b-form-input type="email" id="example-email" placeholder="Введите свой email" />
                      </b-form-group>

                      <b-form-group label="Пароль" class="mb-3">
                        <b-form-input type="password" id="example-password" name="password" placeholder="Введите свой пароль" />
                      </b-form-group>

                      <div class="mb-1 text-center d-grid">
                        <b-button variant="primary" type="submit"> Зарегистрироваться </b-button>
                      </div>
                    </b-form>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <p class="text-white mb-0 text-center">
        У Вас уже есть аккаунт?
        <router-link :to="{ name: 'auth.sign-in' }" class="text-white fw-bold ms-1">Войти в систему</router-link>
      </p>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import LogoBox from '@/components/LogoBox.vue'
import signInImg from '@/assets/images/sign-in.svg'
import SignWithOptions from '@/views/auth/components/SignWithOptions.vue'
</script>
