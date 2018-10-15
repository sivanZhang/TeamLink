<template>
<div id="app">

<keep-alive>
<router-view v-if="$route.meta.keepAlive" />
</keep-alive>
<router-view v-if="!$route.meta.keepAlive" />
</div>
</template>

<script>
export default {
  name: 'App'/* ,
  created(){
    console.log(this.$router.linkActiveClass)
  } */
}

</script>

<style>
#app {
    padding-bottom: 52px;
}
</style>
