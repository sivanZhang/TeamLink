<template>
  <div class="container">
		<div class="tab-group">
		<button v-for="(tab,index) in tabs"
		:key="index"
		:class="[{ active: currentTab === tab.path },'tab-button','btn']"
		@click="currentTab = tab.path">
		{{ tab.name }}
		</button>
		</div>
		<div class="relative" v-show="currentTab=='buy'">
			<input id="search" type="search" class="form-control" placeholder="buy" key="buy">
			<i class="fa fa-search" aria-hidden="true"></i>
		</div>
    	<div class="relative" v-show="currentTab=='rent'">
			<input id="search" type="search" class="form-control" placeholder="rent" key="buy">
			<i class="fa fa-search" aria-hidden="true"></i>
		</div>
     <foote-menu></foote-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Home",
      currentTab: "buy",
      tabs: [{ path: "buy", name: "Buy" }, { path: "rent", name: "Rent" }]
    };
  },
  mounted: function() {
    document.title = "TeamLink " + this.title;
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tab-button {
  border-radius: 0px;
  background: none;
  box-shadow: unset;
  border-bottom: transparent 2px solid;
  &.active {
    outline: none;
    background: none;
	border-bottom: #333 2px solid;
	font-weight: 600;
  }
  &:focus{
	outline: none;  
  }
}
.tab-group{
	display: flex;
	justify-content: center;
	align-items: center;
}
#search {
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12),
    0px 0px 2px 0px rgba(0, 0, 0, 0.08);
  margin-top: 15px;
  width: 100%;
  padding-right: 54px;
  color: #333;
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
.fa-search {
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
</style>
