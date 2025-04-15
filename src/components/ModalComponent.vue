<template>
  <dialog class="modal">
    <i @click="close" class="bx bx-check-double text-success h2 close"></i> <!--  необходимо поставить иконку "х" -->
    <b-row class="">
      <b-col lg="6">
        <div class="text-center" v-if="type === 'success'">
          <i class="bx bx-check-double text-success h2"></i>
          <h3 class="mt-0">Успех!</h3>
          <h5 class="w-75 mb-2 mt-3 mx-auto text-muted">Ваш товар был успешно добавлен!</h5>
        </div>
        <div class="text-center" v-else-if="type === 'failed'">
          <i class="bx bx-check-double text-success h2"></i>
          <h3 class="mt-0">Ошибка!</h3>
          <h5 class="w-75 mb-2 mt-3 mx-auto text-muted">Что-то пошло не так!</h5>
        </div>
        <div class="text-center" v-else>
          <i class="bx bx-check-double text-success h2"></i>
          <h3 class="mt-0">Вы уверены что хотите удалить?</h3>
          <div>
            <button @click="agree">Да</button>
            <button @click="close">Нет</button>
          </div>
        </div>
      </b-col>
    </b-row>
  </dialog>
</template>

<script setup>
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
</script>