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

                <h2 class="fw-bold text-center fs-18">Войти в систему</h2>
                <p class="text-muted text-center mt-1 mb-4">Введите свой адрес электронной почты и пароль для доступа к панели администратора.</p>

                <b-row class="justify-content-center">
                  <b-col md="8" cols="12">
                    <b-form @submit.prevent="handleSignIn" class="authentication-form">
                      <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

                      <b-form-group label="Username" class="mb-3">
                        <b-form-input type="text" id="example-email" name="username" v-model="v.username.$model" placeholder="Введите username" />
                        <div v-if="v.username.$error" class="text-danger">
                          <span v-for="(err, idx) in v.email.$errors" :key="idx">
                            {{ err.$message }}
                          </span>
                        </div>
                      </b-form-group>

                      <b-form-group label="Пароль" class="mb-3">
                        <b-form-input type="password" id="example-password" name="password" v-model="v.password.$model" placeholder="Введите пароль" />
                        <div v-if="v.password.$errors" class="text-danger">
                          <span v-for="(err, idx) in v.password.$errors" :key="idx">
                            {{ err.$message }}
                          </span>
                        </div>
                      </b-form-group>

                      <div class="mb-3">
                        <b-form-checkbox>Запомнить меня</b-form-checkbox>
                      </div>

                      <div class="mb-3 d-flex justify-content-center">
                        <router-link :to="{ name: 'auth.reset-password' }" class="text-muted text-unline-dashed"> Сбросить пароль </router-link>
                      </div>

                      <div class="mb-1 text-center d-grid">
                        <b-button variant="primary" type="submit"> Войти </b-button>
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
        У Вас нет аккаунта?
        <router-link :to="{ name: 'auth.sign-up' }" class="text-white fw-bold ms-1">Зарегистрироваться</router-link>
      </p>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import LogoBox from '@/components/LogoBox.vue'
import signInImg from '@/assets/images/sign-in.svg'
import SignWithOptions from '@/views/auth/components/SignWithOptions.vue'

import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

import HttpClient from '@/helpers/http-client'
import { useAuthStore } from '@/stores/auth'

import type { AxiosResponse } from 'axios'
import type { User } from '@/types/auth'
import router from '@/router'

const credentials = reactive({
  // username: 'user',
  // password: 'password'
})

const vuelidateRules = computed(() => ({
  username: { required },
  password: { required }
}))

const v = useVuelidate(vuelidateRules, credentials)

const useAuth = useAuthStore()
const route = useRoute()
const query = route.query

const error = ref('')
const checked = ref(false)

const handleSignIn = async () => {
  const result = await v.value.$validate()

  if (result) {
    try {
      const res: AxiosResponse<User> = await HttpClient.post('https://dbqazaqart.kz/api-auth/token/', credentials)

      if (res.data.access) {
        useAuth.saveSession({
          ...res.data,
          token: res.data.access
        })
        redirectUser()
      }
    } catch (e: any) {
      if (e.response?.data?.error) {
        if (error.value.length == 0) error.value = e.response?.data?.error
      }
    }
  }
}

const redirectUser = () => {
  console.log('redirect')
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/')
}
</script>
