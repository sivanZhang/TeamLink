<style>
#map {
  min-height: 500px;
}
</style>


<template>
  <div class="main">
      <mt-header title="MAP" class="header">
      <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
    <div id="map"></div>
    <div @click="reload">刷新</div>
  </div>
</template>
  
<script>
export default {
  methods:{
    reload(){
      window.location.reload();
    }
  }
};
</script>
