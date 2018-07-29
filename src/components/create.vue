<template>
  <div class="container">
    <header class="text-center row"><img class="logo" src="../assets/logo.jpg" alt=""></header>
    <div class="black-btn round-btn"><i class="fa fa-plus" aria-hidden="true"></i></div>
    <foote-menu></foote-menu>
  </div>
</template>

<script>
export default {
  name: 'create',
  mounted: function () {
    document.querySelector('body').setAttribute('style', 'background-color:#fff')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  width: 40%;
  padding-bottom: 10px;
  margin: 0 auto;
}
header{
  border-bottom:1px solid #e1e4e8;
}
.round-btn{
  display: inline-block;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 1;
  padding-top: 18px;
  position: absolute;
  right: 15px;
  bottom: 65px;
}
</style>
