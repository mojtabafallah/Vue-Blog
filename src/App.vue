<template>
  <MainHeader></MainHeader>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "./components/global/MainHeader.vue";

export default {
  name: "App",
  components: {MainHeader},

}

</script>

<style scoped>
@import 'public/style.css';
*{
  font-family: IRANSans;
}
</style>