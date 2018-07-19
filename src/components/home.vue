<template>
  <div class="container">
    <img class="logo" src="../assets/logo.jpg" alt="">
    <div class="input-group input-group-lg">
  <input id="search" type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon1">
<span class="input-group-addon" id="sizing-addon1"><i class="fa fa-search" aria-hidden="true"></i></span>
</div>
     <footeMenu></footeMenu>
  </div>

</template>

<script>
import footeMenu from './footeMenu'
export default {
  components: {
    footeMenu
  },
  data () {
    return {
      msg: 'this is component "home"'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#search{
  font-size: 12px;
}
.logo{
  width: 50%;
  margin-top: 30px;
  margin-bottom:15px;
}
.input-group-lg>.form-control, .input-group-lg>.input-group-addon, .input-group-lg>.input-group-btn>.btn{
  padding: 0px 12px;
  height:36px;
}
</style>
