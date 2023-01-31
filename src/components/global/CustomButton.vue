<template>
  <button :class="`btn ${classes}`" :type="buttonType">{{ title }}</button>
</template>

<script setup>
const props = defineProps({
  classes:{
    type: String,
    default: 'primary'
  },
  buttonType: {
    type: String,
    default: 'button'
  },
  title:{
    type: String,
    required: true
  }
});
</script>

<style scoped>

</style>