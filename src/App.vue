<template>
<div id="app"> 
<keep-alive>
    <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
    </router-view>
</keep-alive>

<router-view v-if="!$route.meta.keepAlive">
    <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
</router-view>
</div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
    padding-bottom: 52px;
}
.header h1 {
  margin: 0;
}
.header .mint-button {
  height: 16px;
}
.header a {
  color: inherit;
}
.header {
  background-color: #fff;
  position: fixed!important;
  top: 0;
  width: 100%;
  z-index: 200;
  height: 30px!important;
}
</style>
