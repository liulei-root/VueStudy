<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag ="button" replace>关于</router-link> -->
    <button @click="btnClickHome">主页</button>
    <button @click="btnClickAbout">关于</button>
    <router-view></router-view>
    <div>haha</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    btnClickHome(){
      this.$router.push('/home').catch(err => err)
      console.log('btnClickHome');
    },
    btnClickAbout(){
      this.$router.push('/about').catch(err => err)
      console.log('btnClickAbout');
    }
  }
}
</script>

<style>

</style>
