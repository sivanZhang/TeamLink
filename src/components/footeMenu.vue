<template>
  <ul class="row">
    <router-link class="nav-link " to="/"><li class='col-xs-4'><i class="fa fa-search" aria-hidden="true"></i></li>
    </router-link>
    <router-link class="nav-link" to="/create"><li class='col-xs-4'><i class="fa fa-bandcamp" aria-hidden="true"></i></li>
    </router-link>
    <li @click="isLogin" class='col-xs-4'><i class="fa fa-ellipsis-h" aria-hidden="true"></i></li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    isLogin(){
      if(this.$cookie.get('user-name')){
        this.$router.push("/user-center");
      }else{
        this.$router.push("/login");
      }
    }
  }
}
</script>

<style scoped>
ul{
  background-color: #000;/* #24292e; */
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  color: gray;
}
</style>
