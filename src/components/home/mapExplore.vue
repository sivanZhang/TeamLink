<template>
    <div class="">
       <div class="input-group container">
            <i class="fa fa-chevron-left" @click="back" aria-hidden="true"></i>
            <input class="form-control" v-model="searchText" type="text">
            <span class="input-group-addon"><i @click="showFilters" class="fa fa-sliders" aria-hidden="true"></i></span>
        </div>
        <div class="container">	<footer-menu></footer-menu></div>
        <div class="iframe-warp">
          <iframe id="show-iframe" frameborder="0" scrolling="auto" src="https://snazzymaps.com/" allowfullscreen></iframe>
        </div>
    <loading v-if="loading"></loading>
        <filters v-show="filtersShow"></filters>
        
    </div>
</template>
<script>
import filters from "./filters";
export default {
  components: {
    filters
  },
  data() {
    return {
      filtersShow: false,
      searchText: "",
      loading: true
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    showFilters() {
      this.$router.push("/filters");
    }
  },
  created() {
    if (this.$store.state.searchText) {
      this.searchText = this.$store.state.searchText;
      this.$store.commit("setSearchText", "");
    }
  },
  mounted() {
    const oIframe = document.getElementById("show-iframe"),
      deviceWidth = document.documentElement.clientWidth,
      deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = deviceWidth + "px";
    oIframe.onload = () => {
      this.loading = false;
    };
  }
};
</script>
<style lang="less" scoped>
.input-group {
  z-index: 200;
  display: table;
  position: absolute;
  top: 15px;
  width: 100%;
  .input-group-addon {
    display: table-cell;
    background-color: unset;
    border: unset;
    width: 1%;
  }
  input.form-control {
    display: table-cell;
    width: 100%;
    border-radius: unset;
    border: 0px;
    padding-left: 30px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
  .fa-chevron-left {
    position: absolute;
    top: 10px;
    left: 25px;
    z-index: 4;
  }
}

.ivu-slider-button {
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  cursor: move;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
.iframe-warp {
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  z-index: 99;
  padding-bottom: 46px;
}
</style>
