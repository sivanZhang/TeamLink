<template>
  <ul class="row">
    <router-link to="/"><li class='col-xs-4'><i class="fa fa-search" aria-hidden="true"></i></li>
    </router-link>
    <router-link to="/create"><li class='col-xs-4'><i class="fa fa-bandcamp" aria-hidden="true"></i></li>
    </router-link>
    <router-link to="/user-center"><li class='col-xs-4'><i class="fa fa-ellipsis-h" aria-hidden="true"></i></li>
    </router-link>
  </ul>
</template>

<script>
export default {
  data () {
    return {
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
