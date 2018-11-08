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
  name: "App"
};
</script>

<style>
#app {
    padding-bottom: 52px;
}
.header /deep/ h1 {
  margin: 0;
}
.header /deep/ .mint-button {
  height: 16px;
}
.header /deep/ a {
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
  border-bottom: 1px solid #ddd;
  z-index: 200;
  height: 30px!important;
}
</style>
