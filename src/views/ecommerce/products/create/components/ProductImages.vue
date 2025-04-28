<!-- PageQazaqart -->
<template>
  <h5 class="fs-14 mb-1">Загрузить изображение</h5>
  <p class="text-muted fs-13">Нажмите на пустую область и выберите изображние для загрузки.</p>
  <form action="/" method="post" class="dropzone" id="productImagesForm" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
    <div class="dz-message needsclick">
      <i class="h1 bx bx-cloud-upload"></i>
      <h3>Перетащите файлы сюда или нажмите, чтобы загрузить.</h3>

      <div class="fallback">
      <input name="file" type="file" @change="imgSet" ref="fileImg" accept="image/*"/>
    </div>

    </div>
  </form>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Dropzone from 'dropzone'

const fileImg = ref<File | null>()

const emit = defineEmits(['set-img'])

const setImg = () => {
  console.log('file', fileImg.value)
  emit('set-img', fileImg.value)
}

const imgSet = function ($event: Event) {
  const target = $event.target as HTMLInputElement
  if (target && target.files) {
    fileImg.value = target.files[0]
    setImg()
  }
}

onMounted(() => {
  // const dropzonePreviewNode = document.querySelector('#dropzone-preview-list') as HTMLElement
  // dropzonePreviewNode.id = ''
  // if (dropzonePreviewNode) {
  //   const previewTemplate = dropzonePreviewNode.parentElement?.innerHTML
  //   dropzonePreviewNode.parentNode?.removeChild(dropzonePreviewNode)
  //   const dropzone = new Dropzone('.dropzone', {
  //     url: 'https://httpbin.org/post',
  //     method: 'post',
  //     previewTemplate: previewTemplate,
  //     previewsContainer: '#dropzone-preview'
  //   })
  // }
})
</script>
