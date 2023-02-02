<script setup>
import {QuillEditor} from '@vueup/vue-quill';
import {Form, Field} from 'vee-validate';

const props = defineProps({
  value: {
    type: String,
    default:
        ''
  }
});

const onSubmit = () => {
  console.log(123);
}

const options = {
  debug: 'info',
  modules: {
    toolbar: ['bold', 'italic', 'underline']
  },
  placeholder: 'Compose an epic...',
  readOnly: true,
  theme: 'snow'
}


</script>

<template>
  <div class="row">
    <Form @submit="onSubmit" onsubmit>
      <div class="col-md-6 col-sm-12">
        <Field name="title" class="form-control" type="text"/>
      </div>
      <QuillEditor theme="snow"/>
      <button class="btn btn-success mt-2" type="submit">ذخیره</button>
    </Form>
  </div>

</template>

<style>
</style>