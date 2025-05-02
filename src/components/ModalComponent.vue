<template>
  <div class="modal-backdrop">
    <dialog class="modal">
      <button @click="redirectToHome" class="close-button">
        <i class="bx bx-x"></i>
      </button>
      <b-row class="">
        <b-col lg="12">
          <div class="text-center" v-if="type === 'success'">
            <i class="bx bx-check-double text-success h2"></i>
            <h3 class="mt-0">Успех!</h3>
            <h5 class="w-75 mb-2 mt-3 mx-auto text-muted">Ваш товар был успешно добавлен!</h5>
          </div>
          <div class="text-center" v-else-if="type === 'failed'">
            <i class="bx bxs-calendar-exclamation text-warning h2"></i>
            <h3 class="mt-0">Ошибка!</h3>
            <h5 class="w-75 mb-2 mt-3 mx-auto text-muted">Что-то пошло не так!</h5>
          </div>
          <div class="text-center" v-else-if="type === 'delete'">
            <i class="bx bx-trash text-danger h2"></i>
            <h3 class="mt-0">Вы уверены что хотите удалить?</h3>
            <div>
              <button @click="agree">Да</button>
              <button @click="close">Нет</button>
            </div>
          </div>
          <div class="text-center">
            <slot name="body"></slot>
          </div>
        </b-col>
      </b-row>
    </dialog>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const emits = defineEmits(['close-modal'])

defineProps({
  type: {
    type: String,
    default: ''
  }
})

const close = function () {
  emits('close-modal')
}

const agree = function () {
  emits('agree-action')
}

const redirectToHome = function() {
  router.push('/products') // Перенаправление на главную страницу
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: none;
}

.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.5rem;
  color: #666;
  transition: color 0.2s;
}

.close-button:hover {
  color: #333;
}

button {
  margin: 0 8px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background: #e9e9e9;
}
</style>