<template>
  <ul>
    <li>搜索</li>
    <li>添加</li>
    <li>个人中心</li>
  </ul>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  display: inline-block;
}
</style>
