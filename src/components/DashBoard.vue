<template>
  <section-header></section-header>
  <div class="row">
    <div class="col-md-8 col-sm-12">
      <custom-button title="افزودن مقاله" classes="btn-primary mb-2 mt-2" @click="onClick"></custom-button>
      <h2>مقالات</h2>
      <table class="table table-bordered table-dark table-striped table-hover text-center">
        <thead>
        <tr>
          <th>#</th>
          <th>شناسه</th>
          <th>عنوان</th>
          <th>تصویر</th>
          <th>نویسنده</th>
          <th>عملیات</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(post, index) in posts">
          <td>{{ index + 1 }}</td>
          <td>{{ post.id }}</td>
          <td>
            <router-link class="text-decoration-none text-white" :to="{name: 'showPost', params:{id:post.id}}">
              {{ post.title }}
            </router-link>
          </td>
          <td><img src="{{post.thumbnail}}"></td>
          <td>
            <router-link class="text-decoration-none text-white" :to="{name:'showAuthor', params:{id:1}}">
              {{ post.author.name }}
            </router-link>
          </td>
          <td>
            <div class="btn-group-sm" role="group">
              <button type="button" class="btn btn-primary ms-2">نمایش</button>
              <button type="button" class="btn btn-secondary ms-2">ویرایش</button>
              <button type="button" class="btn btn-danger">حذف</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-10 col-sm-12 ">
      <h2>کاربران</h2>
      <table class="table table-bordered table-dark table-striped table-hover text-center">
        <thead>
        <tr>
          <th>#</th>
          <th>شناسه</th>
          <th>نام نمایشی</th>
          <th>تصویر</th>
          <th>نام کاربری</th>
          <th>ایمیل</th>
          <th>نقش</th>
          <th>عملیات</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, index) in users">
          <td>{{ index + 1 }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td><img src="{{user.avatar}}"></td>
          <td>{{ user.username }}</td>
          <td> {{ user.email }}</td>
          <td> {{ user.role }}</td>
          <td>
            <div class="btn-group-sm" role="group">
              <button type="button" class="btn btn-primary ms-2">نمایش</button>
              <button type="button" class="btn btn-secondary ms-2">ویرایش</button>
              <button type="button" class="btn btn-danger">حذف</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script setup>
import SectionHeader from "./global/SectionHeader.vue";
import CustomButton from "./global/CustomButton.vue"
import {useRouter} from "vue-router";


const router = useRouter();


const posts = [
  {
    id: '1',
    title: 'عنوان اول',
    thumbnail: '1.jpg',
    author: {
      id: '1',
      name: 'مجتبی فلاح',
      avatar: '2.jpg'
    }
  },
  {
    id: '1',
    title: 'عنوان اول',
    thumbnail: '1.jpg',
    author: {
      id: '1',
      name: 'مجتبی فلاح',
      avatar: '2.jpg'
    }
  },
];
const users = [
  {
    id: '1',
    name: 'مجتبی',
    avatar: '1.jpg',
    username: 'mojtaba.fallah',
    email: 'mojtaba.fallah1373@gmail.com',
    role: 'مدیر'
  }
];

const onClick = () => {
  console.log(router);
  router.push("newPost");
}

</script>

<style scoped>

</style>