<template>
  <div class="container">
    <div class="relative">
    <input id="search" type="search" class="form-control" placeholder="Search" aria-describedby="sizing-addon1">
    <div class="icons">
    <i class="fa fa-search" aria-hidden="true"></i>
    <i class="fa fa-sliders" aria-hidden="true"></i>
    </div>
    </div>
     <foote-menu :navindex='0'></foote-menu>
  </div>
</template>

<script>
export default {
  mounted: function () {
    document.querySelector('body').setAttribute('style', 'background-color:#fff')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search {
    border: none;
    outline: none;
    border-radius: 4px;
    box-shadow:0 3px 20px -3px rgba(0,0,0,0.16), 1px 2px 0px -1px rgba(0,0,0,0.08);
    margin-top: 15px;
    width: 100%;
    padding-right: 54px;
    color:gray;
    height: 42px;
}
h1,
h2 {
  font-weight: normal;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.icons{
  position: absolute;
  right: 6px;
  bottom: 12px;
}
#search {
  font-size: 12px;
}
.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  padding: 0px 12px;
  height: 36px;
}
.fa+.fa{
 margin-left: 6px;
 padding-left: 6px;
 border-left: 1px solid #e1e4e8;
}
</style>
