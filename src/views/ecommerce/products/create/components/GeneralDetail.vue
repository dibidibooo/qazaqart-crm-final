<!-- PageQazaqart -->
<template>
  <b-form id="generalDetailForm" method="post" action="#">
    <b-row>
      <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Название товара" label-for="productName">
            <b-form-input type="text" id="productName" placeholder="Введите название товара" />
          </b-form-group>
        </div>
      </b-col>
      <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Цвет" label-for="productSummary">
            <b-form-select>
                <b-form-select-option value="Black">Черный</b-form-select-option>
                <b-form-select-option value="white">Белый</b-form-select-option>
                <b-form-select-option value="gray">Серый</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </div>
        </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <div class="mb-3">
          <label class="form-label">Описание товара</label>
          <QuillEditor theme="snow" :toolbar="toolbar" style="height: 195px" content="" content-type="html" />
        </div>
      </b-col>
      <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Категория" label-for="productSummary">
            <b-form-select>
                <b-form-select-option value="tshirt">Футболки</b-form-select-option>
                <b-form-select-option value="hoodie">Худи</b-form-select-option>
                <b-form-select-option value="sweatshirt">Свитшоты</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </div>
        </b-col>
        <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Размер" label-for="productSummary">
            <b-form-select>
              <b-form-select-option value="S">S</b-form-select-option>
              <b-form-select-option value="M">M</b-form-select-option>
              <b-form-select-option value="L">L</b-form-select-option>
              <b-form-select-option value="XL">XL</b-form-select-option>
              <b-form-select-option value="XXL">XXL</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </div>
        </b-col>
        <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Цена" label-for="price">
            <b-form-input type="text" id="price" placeholder="Введите сумму" />
          </b-form-group>
        </div>
      </b-col>
    </b-row>
    <div class="mb-3">
      <label class="form-label">Статус</label><br />
      <b-form-radio-group v-model="inlineStackedSelected" :options="inlineStackedOptions" name="radio-inline" />
    </div>
  </b-form>
</template>
<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import { ref } from 'vue'

const toolbar = [[{ font: [] }, { size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ script: 'super' }, { script: 'sub' }], [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['direction', { align: [] }], ['link', 'image', 'video'], ['clean']]

const inlineStackedOptions = [
  { text: 'В наличии', value: 'В наличии' },
  { text: 'Не в наличии', value: 'Не в наличии' },
]

const inlineStackedSelected = ref('online')
</script>
