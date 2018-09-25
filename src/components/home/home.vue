<template>
	<div class="container">
		<div class="search-bg row">
			<div class="search-warp">
				<div class="tab-group">
					<button v-for="(tab,index) in tabs"
					:key="index"
					:class="[{ active: currentTab === tab.path },'tab-button','btn']"
					@click="currentTab = tab.path">
					{{ tab.name }}
					</button>
				</div>
				<div class="relative" v-show="currentTab=='buy'">
					<input type="search" class="form-control search" placeholder="buy" key="buy">
					<i class="fa fa-search" aria-hidden="true"></i>
				</div>
				<div class="relative" v-show="currentTab=='rent'">
					<input type="search" class="form-control search" placeholder="rent" key="buy">
					<i class="fa fa-search" aria-hidden="true"></i>
				</div>	
			</div>
		</div>
		<h4>Recently Viewed</h4>
		<div class="item-wrap">
			<div class="item">
				
			</div>
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
.search-bg{
	height: 480px;
	display: flex;
	justify-content:center;
    align-items: center;
	background-color: green;

}
.search-warp {
	background: #fff;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 12px 4px rgba(115, 117, 123, 0.12);
  margin:0 15px;
  .tab-group {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .tab-button {
      width: 30%;
      height: 54px;
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
      &:focus {
        outline: none;
      }
    }
  }
  .relative {
    .search {
      border: none;
      outline: none;
      width: 100%;
      padding-left: 54px;
      color: #333;
	  height: 54px;
	  border-radius: 8px;
    }
    .fa-search {
      position: absolute;
      left: 12px;
      bottom: 18px;
    }
  }
}
h4{
	margin: 20px 0 15px;
}
.item-wrap{
	.item{

	}
}
</style>
