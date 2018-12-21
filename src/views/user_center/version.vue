<template>
  <div class="text-center container main">
    <van-nav-bar title="Version" left-arrow @click-left="$router.go(-1)" fixed />
    <h3>V1.0.0</h3>
    <br />
    <br />
    <label style="color:gray">©2018 TeamLink</label>
  </div>
</template>
to be expected
<script>
  export default {
    data() {
      return {}
    },
    components: {},
    mounted() {
      console.log(this.$route,this.$router)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin-top: 50%;
  }
</style>