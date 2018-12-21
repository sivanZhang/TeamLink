<template>
	<div class="container text-center main">
        <van-nav-bar title="TeamLink" left-arrow @click-left="$router.go(-1)" fixed />
    <div class="iframe-warp row">
      <iframe id="show-iframe" frameborder="0" scrolling="auto" :src="$store.state.url" allowfullscreen></iframe>
    </div>
    <loading v-if="loading"></loading>
    <footer-menu></footer-menu>
	</div>
</template>

<script>
export default {
  name: "Iframe",
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    const oIframe = document.getElementById("show-iframe")
    ,deviceWidth = document.documentElement.clientWidth
    ,deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = deviceWidth + "px";
    oIframe.style.height = deviceHeight + "px";
    oIframe.onload = () => {
      this.loading = false;
    };
  }
};
</script>

<style scoped>
header {
  padding: 10px 0;
  position: fixed;
  top: 0;
  width: 100%;
}
.logo {
  width: 33.9%;
}
.iframe-warp {
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  z-index: 99;
  padding-bottom: 46px;
  margin-top: 47.7px;
}
.container {
  background: #fff;
  margin-top: 35px !important;
}
</style>
