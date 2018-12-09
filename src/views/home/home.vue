<template>
  <div class="container main">
    <mt-header title="Teamlink" class="row header"></mt-header>
    <div class="search-bg row">
      <div class="search-warp">
        <div class="tab-group">
          <button
            v-for="(tab,index) in tabs"
            :class="[{ active: currentTab == tab.name },'tab-button','btn']"
            @touchstart="currentTab = tab.name"
            :key="index"
          >{{ tab.name }}</button>
        </div>
        <div class="relative">
          <i class="fa fa-search" @touchstart="search(currentTab)" aria-hidden="true"></i>
          <input
            type="search"
            v-model="searchText"
            @keyup.enter="search(currentTab)"
            class="form-control search"
          >
        </div>
      </div>
    </div>
    <h4>Recently Viewed</h4>
    <div class="data-warp">
      <div
        class="p-data"
        v-for="(item,index) in ajaxData"
        @click="target(item[0].propertyId)"
        :key="index"
      >
        <div class="left">
          <img :src="item[0].images[0]" alt>
          <!-- <i @click.stop="collections(item[0].propertyId)" :class="['fa',item[0].collection=='Yes'?`fa-heart`:`fa-heart-o`]" class="fa" aria-hidden="true"></i> -->
        
        </div>
        <div class="right">
          <div>{{item[0].title}}</div>
          <div class="adress">Modern Apartment</div>
          <div class="money">$ {{item[0].attributes.real_estate_property_price}}</div>
          <div>
            {{item[0].attributes.real_estate_property_bedrooms}}
            <i class="fa fa-bed" aria-hidden="true"></i>
            {{item[0].attributes.real_estate_property_bathrooms}}
            <i
              class="fa fa-bath"
              aria-hidden="true"
            ></i>
            {{item[0].attributes.real_estate_property_garage}}
            <i
              class="fa fa-car"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>

    <footer-menu></footer-menu>
  </div>
</template>

<script>
import Ajax from "@/api/collections";
export default {
  data() {
    return {
      title: "Home",
      currentTab: "Buy",
      tabs: [{ name: "Buy" }, { name: "Rent" }],
      searchText: "",
      postedTime: `Today 1:00 PM - 5:00 PM`,
      ajaxData: "",
      isShow:true
    };
  },
  methods: {
    collections(pid) {
      let data = {
        propertyid: pid
      };
      Ajax.postCollections(data).then(res => {
        this.isShow=!this.isShow
        this.getAjax();
      });
    },
    search(val) {
      // prep some variables  
      this.$store.commit("set_search", this.searchText);
      this.$router.push({
        name: "mapExplore",
        params: {
          tid: val
        }
      });
    },
    target(id) {
      this.$router.push({
        name: "benaa",
        params: {
          pid: id
        }
      });
    },getAjax(){
      this.axios
      .get("/property/properties/")
      .then(res => {
        this.ajaxData = res.data.properties.slice(0, 3);
        this.$store.commit("setAgents", res.data.properties.slice(0, 3));
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  created() {
    document.title = "TeamLink " + this.title;
    this.getAjax()
  }
};
</script>
<style scoped lang="less">
.fa-heart{
  color: red!important;
}
.data-warp {
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  overflow: scroll;
  width: 100%;
  .p-data {
    box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.18);
    flex: 0 0 auto;
    display: flex;
    justify-content: flex-start;
    margin-right: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    width: 90%;

    .left {
      flex: 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-right: 15px;
      img {
        width: 8rem;
        height: 8rem;
      }
      .fa {
        position: absolute;
        right: 1rem;
        top: 1rem;
        color: #fff;
        font-size: 16px;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-flow: column nowrap;
      width: 100%;
      color: #757575;
      .adress {
        color: #333;
      }
      .money {
        color: rgb(177, 69, 55);
      }
    }
  }
}
.search-bg {
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/img/main.jpg);
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
      padding-left: 35px;
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

    img {
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