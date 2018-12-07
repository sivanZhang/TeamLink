<template>
<div id="app">
<mt-header title="TeamLink" class="row header">
            <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
        </mt-header>
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
.main {
  width: 100%;
  position: absolute;
  overflow: auto;
  top: 30;
  padding-bottom: 52px;
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
