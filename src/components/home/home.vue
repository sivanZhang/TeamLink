<template>
	<div class="container main">
    <mt-header title="teamlink" class="row header">
    </mt-header>
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
          <i class="fa fa-search" @click="search('buy')" aria-hidden="true"></i>
					<input type="search" v-model="searchText" @keyup.enter="search('buy')" class="form-control search" placeholder="buy" key="buy">
				</div>
				<div class="relative" v-show="currentTab=='rent'">
          <i class="fa fa-search" @click="search('rent')" aria-hidden="true"></i>
					<input type="search" @keyup.enter="search('rent')" v-model="searchText" class="form-control search" placeholder="rent" key="rent">
				</div>	
			</div>
		</div>
		<h4>Recently Viewed</h4>
    <router-link to="/benaa/771" class="suggest" tag="div">
      <div class="suggest-title">
        <i class="fa fa-clock-o" aria-hidden="true"></i>
        {{postedTime}}
      </div>
      <div class="suggest-details" ><!-- @click="getHtml(`http://www.demo-it.com.au/teamlink/property/single-house-near-orland-park-chicago/`)" -->
          <img :src="ajaxData.images[0]" alt="">
      </div>
      <div class="suggest-info">
        <div>
          {{ajaxData.title}}
        </div>
        <div>
          <i class="fa fa-picture-o" aria-hidden="true"></i> {{ajaxData.images.length}}
       		</div>
     	</div>
	 	<div class="container">
			 <h5>Modern Apartment</h5>
		<div class="price">${{ajaxData.attributes.real_estate_property_price}}</div>
		<div class="outfit">
			{{ajaxData.attributes.real_estate_property_bedrooms}}<i class="fa fa-bed" aria-hidden="true"></i>
			{{ajaxData.attributes.real_estate_property_bathrooms}}<i class="fa fa-bath" aria-hidden="true"></i>
			{{ajaxData.attributes.real_estate_property_garage}}<i class="fa fa-car" aria-hidden="true"></i>
		</div>
		 </div>
    </router-link>
		<footer-menu></footer-menu>
	</div>
</template>

<script>
export default {
  data() {
    return {
      title: "Home",
      currentTab: "buy",
      tabs: [{ path: "buy", name: "Buy" }, { path: "rent", name: "Rent" }],
      searchText: "",
      postedTime: `Today 1:00 PM - 5:00 PM`,
      ajaxData:''
    };
  },
  methods: {
    getHtml(val) {
      this.$store.commit("setUrl", val);
      this.$router.push("/iframe");
    },
    search(val) {
      if (this.searchText) {
        this.$store.commit("setSearchText", this.searchText);
        this.$router.push(`/home/${val}`);
      } else {
        this.$router.push(`/home/${val}`);
      }
    }
  },
  created() {
    document.title = "TeamLink " + this.title;
    this.axios.get('/property/properties/771').then(res=>{
      console.log(res)
      this.ajaxData=res.data.property[0]
    }).catch(err=>{
      console.log(err)
    })
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search-bg {
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../../static/image/main.jpg);
  background-position: left;
  background-size: cover;
}
.search-warp {
  background: #fff;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 12px 4px rgba(115, 117, 123, 0.12);
  margin: 0 15px;
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
      color: #333;
      padding-right: 26px;
      height: 54px;
      border-radius: 8px;
    }
    .fa-search {
      position: absolute;
      right: 15px;
      bottom: 18px;
    }
  }
}
h4 {
  margin: 20px 0 15px;
}
.suggest {
  .outfit {
    color: rgb(91, 91, 91);
    .fa {
      margin: 0 2px 0 6px;
    }
  }
  .price {
    color: rgb(177, 69, 55);
  }
  .suggest-info {
    display: flex;
    justify-content: space-between;
    background: #000;
    color: #fff;
    padding: 4px 15px;
  }
  .suggest-details {
    height: 200px;
    overflow: hidden;
    img{
      height: auto;
      width: 100%;
    }
  }
  .suggest-title {
    color: #fff;
    background: rgb(255, 87, 34);
    padding: 0 15px;
  }
}
</style>
