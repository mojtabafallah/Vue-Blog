<template>
  <section-header></section-header>

    <div class="row">
      <div class="col-6">
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
            <td>{{post.id}}</td>
            <td>{{ post.title }}</td>
            <td><img src="{{post.thumbnail}}" ></td>
            <td>
              <router-link :to="{name:'showAuthor', params:{id:1}}">{{ post.author.name }}</router-link>
            </td>
            <td>
              <div class="btn-group-sm" role="group" >
                <button type="button" class="btn btn-primary ms-2">نمایش</button>
                <button type="button" class="btn btn-secondary ms-2">ویرایش</button>
                <button type="button" class="btn btn-danger">حذف</button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6"></div>
    </div>

</template>

<script>
import SectionHeader from "./global/SectionHeader.vue";

export default {
  name: "DashBoard",
  data() {
    return {
      posts: [
        {
          id: '1',
          title: 'عنوان اول',
          thumbnail: '1.jpg',
          author: {
            id: '1',
            name: 'مجتبی فلاح',
            avatar: '2.jpg'
          }
        }
      ]
    }
  },
  components: {SectionHeader}
}
</script>

<style scoped>

</style>