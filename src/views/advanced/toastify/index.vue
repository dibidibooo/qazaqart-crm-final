<template>
  <DefaultLayout>
    <PageBreadcrumb title="Toastify" subtitle="Advanced UI" />

    <b-row>
      <b-col xl="9">
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="anchor mb-3" id="basic">
              Basic Toastify JS Example
              <a class="anchor-link" href="#basic">#</a>
            </b-card-title>

            <div>
              <div class="hstack flex-wrap gap-2">
                <b-button variant="light" @click="showToast('Welcome Back! This is a Toast Notification', { position: 'top-right' })" class="w-xs"> Default </b-button>

                <b-button variant="light" @click="showToast('Your application was successfully sent', { type: 'success', position: 'top-center' })" class="w-xs"> Success </b-button>

                <b-button variant="light" @click="showToast('Warning ! Something went wrong try again', { type: 'warning', position: 'top-center' })" class="w-xs"> Warning </b-button>

                <b-button variant="light" @click="showToast('Error ! An error occurred.', { type: 'error', position: 'top-center' })" class="w-xs"> Error </b-button>
              </div>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-3 anchor" id="display_position">
              Display Position Example
              <a class="anchor-link" href="#display_position">#</a>
            </b-card-title>

            <div>
              <div class="hstack flex-wrap gap-2">
                <b-button variant="light" @click="showToast('Welcome Back ! This is a Toast Notification', { position: 'top-left' })" class="w-xs"> Top Left </b-button>

                <b-button variant="light" @click="showToast('Welcome Back ! This is a Toast Notification', { position: 'top-center' })" class="w-xs"> Top Center </b-button>

                <b-button variant="light" @click="showToast('Welcome Back ! This is a Toast Notification', { position: 'top-right' })" class="w-xs"> Top Right </b-button>

                <b-button variant="light" @click="showToast('Welcome Back ! This is a Toast Notification', { position: 'bottom-left' })" class="w-xs"> Bottom Left </b-button>

                <b-button variant="light" @click="showToast('Welcome Back ! This is a Toast Notification', { position: 'bottom-center' })" class="w-xs"> Bottom Center </b-button>

                <b-button variant="light" @click="showToast('Welcome Back ! This is a Toast Notification', { position: 'bottom-right' })" class="w-xs"> Bottom Right </b-button>
              </div>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-3 anchor" id="rater">
              RTL, Close Button & Duration Example
              <a class="anchor-link" href="#rater">#</a>
            </b-card-title>

            <div>
              <div class="d-flex align-items-center flex-wrap gap-2">
                <b-button variant="light" @click="showToast('Welcome Back ! This is a Toast Notification', { position: 'top-right', rtl: true })" class="w-xs"> RTL </b-button>

                <b-button variant="light" @click="showToast('Welcome Back ! This is a Toast Notification', { position: 'top-right', closeButton: false })" class="w-xs"> Close Disable </b-button>

                <b-button variant="light" @click="showToast('Toast Duration 3s', { position: 'top-right', autoClose: 3000 })" class="w-xs"> Duration </b-button>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col xl="3">
        <AnchorNavigation :elements="anchorNavigation" />
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

import { toast, type ToastOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const anchorNavigation = [
  {
    id: 'basic',
    title: 'Basic'
  },
  {
    id: 'display_position',
    title: 'Display Position Example'
  },
  {
    id: 'rater',
    title: 'Offset, Close Button & Duration Example'
  }
]

const showToast = (message: string, options: ToastOptions) => {
  toast(message, options)
}
</script>
