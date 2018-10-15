<template>
    <div class="">
       <div class="input-group container">
            <i class="fa fa-chevron-left" @click="back" aria-hidden="true"></i>
            <input class="form-control" v-model="searchText" type="text">
            <span class="input-group-addon"><i @click="showFilters" class="fa fa-sliders" aria-hidden="true"></i></span>
        </div>
        <filters v-show="filtersShow"></filters>
        <div class="container"><foote-menu></foote-menu></div>
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
      searchText: ""
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
      this.searchText=this.$store.state.searchText;
      this.$store.commit("setSearchText",'');
    }
  }
};
</script>
<style lang="less" scoped>
.input-group {
  margin-top: 15px;
  display: table;
  position: relative;
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
</style>
