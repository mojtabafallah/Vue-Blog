<script>
import {QuillEditor} from '@vueup/vue-quill';

export default {

  props: {
    value: {
      type: String,
      default: ''
    }
  },
  components: {
    QuillEditor
  },
  data() {
    return {
      editor: null
    };
  }
}
</script>

<template>
  <QuillEditor theme="snow"/>
</template>

<style>
</style>