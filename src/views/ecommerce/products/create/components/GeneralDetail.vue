<!-- PageQazaqart -->
<template>
  <b-form id="generalDetailForm" method="post" action="#">
    <b-row>
      <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Название товара" label-for="productName">
            <b-form-input @input="setValue" v-model="shopItem.name" type="text" id="productName" placeholder="Введите название товара" />
          </b-form-group>
        </div>
      </b-col>
      <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Цвет" label-for="productSummary">
            <b-form-select v-model="shopItem.color" @change="setValue">
                <b-form-select-option value="Черный">Черный</b-form-select-option>
                <b-form-select-option value="Белый">Белый</b-form-select-option>
                <b-form-select-option value="Серый">Серый</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </div>
        </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <div class="mb-3">
          <label class="form-label">Описание товара</label>
          <QuillEditor theme="snow" @input="setValue" :toolbar="toolbar" style="height: 195px;" content-type="html" />
        </div>
      </b-col>
      <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Категория" label-for="productSummary">
            <b-form-select v-model="shopItem.category" @change="setValue">
                <b-form-select-option value="2">Футболки</b-form-select-option>
                <b-form-select-option value="0">Худи</b-form-select-option>
                <b-form-select-option value="1">Свитшоты</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </div>
        </b-col>
        <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Размер" label-for="productSummary">
            <b-form-select v-model="shopItem.size" @change="setValue">
              <b-form-select-option value="0">S</b-form-select-option>
              <b-form-select-option value="1">M</b-form-select-option>
              <b-form-select-option value="2">L</b-form-select-option>
              <b-form-select-option value="3">XL</b-form-select-option>
              <b-form-select-option value="4">XXL</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </div>
        </b-col>
        <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Цена" label-for="price">
            <b-form-input @input="setValue" type="text" id="price" placeholder="Введите сумму" v-model="shopItem.price"/>
          </b-form-group>
        </div>
      </b-col>
    </b-row>
    <div class="mb-3">
      <label class="form-label">Статус</label><br />
      <b-form-radio-group @change="setValue" v-model="shopItem.isHave" :options="inlineStackedOptions"  name="radio-inline" />
    </div>
  </b-form>
</template>
<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import { ref } from 'vue'

const shopItem = ref({
  name: '',
  color: '',
  desc: 'jek',
  category: '',
  size: '',
  price: 0,
  isHave: false
})

const toolbar = [[{ font: [] }, { size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ script: 'super' }, { script: 'sub' }], [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['direction', { align: [] }], ['link', 'image', 'video'], ['clean']]

const inlineStackedOptions = [
  { text: 'В наличии', value: true },
  { text: 'Не в наличии', value: false },
]

const inlineStackedSelected = ref('online')

const emit = defineEmits(['set-main-data'])

const setValue = () => {
  emit('set-main-data', shopItem.value)
}
</script>
