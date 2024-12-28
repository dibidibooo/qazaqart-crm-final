<template>
  <div>
    <b-offcanvas placement="end" class="border-0" id="right-sidebar" header-class="p-0" body-class="p-0">
      <template v-slot:header>
        <div class="d-flex align-items-center bg-primary p-3 w-100">
          <h5 class="text-white m-0">Настройки темы</h5>
          <button type="button" class="btn-close btn-close-white ms-auto" v-b-toggle="'right-sidebar'"></button>
        </div>
      </template>

      <div class="p-0">
        <simplebar data-simplebar class="h-100">
          <div class="p-3 settings-bar">
            <div>
              <h5 class="mb-3 font-16 fw-semibold">Цвет сайта</h5>

              <BFormRadioGroup stacked v-model="layout.theme" name="theme" @change="setTheme(layout.theme)">
                <BFormRadio value="light">Светлый</BFormRadio>
                <BFormRadio value="dark">Темный</BFormRadio>
              </BFormRadioGroup>
            </div>

            <div v-if="layout.theme === 'light'">
              <h5 class="my-3 font-16 fw-semibold">Цвет шапки</h5>

              <BFormRadioGroup stacked v-model="layout.topBarColor" name="topbar-color" @change="setTopBarColor(layout.topBarColor)">
                <BFormRadio value="light">Светлый</BFormRadio>
                <BFormRadio value="dark">Темный</BFormRadio>
              </BFormRadioGroup>
            </div>

            <div v-if="layout.theme === 'light'">
              <h5 class="my-3 font-16 fw-semibold">Цвет меню</h5>

              <BFormRadioGroup stacked v-model="layout.leftSideBarColor" name="menu-color" @change="setLeftSideBarColor(layout.leftSideBarColor)">
                <BFormRadio value="light">Светлый</BFormRadio>
                <BFormRadio value="dark">Темный</BFormRadio>
              </BFormRadioGroup>
            </div>
          </div>
        </simplebar>
      </div>

      <template v-slot:footer>
        <div class="border-top p-3 text-center">
          <b-row>
            <b-col>
              <b-button variant="danger" class="w-100" @click="reset"> Отменить </b-button>
            </b-col>
          </b-row>
        </div>
      </template>
    </b-offcanvas>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue'

import { useLayoutStore } from '@/stores/layout'

const useLayout = useLayoutStore()

const { layout, setTheme, setTopBarColor, setLeftSideBarColor, setLeftSideBarSize, reset } = useLayout
</script>
