<template>
  <div class="container main warp-pb">
    <van-nav-bar title="Teamlink" fixed></van-nav-bar>
    <div class="search-bg row">
      <div class="search-warp">
        <van-tabs>
          <van-tab
            v-for="(tab,index) in tabs"
            @touchend="currentTab = tab.name"
            :key="index"
            :title="tab.name"
          >
            <div class="relative">
              <i class="fa fa-search" @click.passive="search(tab.name)" aria-hidden="true"></i>
              <input
                type="search"
                v-model="searchText"
                @keyup.enter="search(tab.name)"
                class="form-control search"
              >
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <h4>Recently Viewed</h4>
    <div class="data-warp">
      <van-loading class="loading"/>
<div
          class="p-data"
          v-for="(item,index) in ajaxData"
          @click.passive="target(item[0].propertyId)"
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
              <i
                class="fa fa-bed"
                aria-hidden="true"
              ></i>
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

    <footer-menu/>
  </div>
</template>

<script>
import { getProperties } from "@/api/home";
import Ajax from "@/api/collections";
export default {
  data() {
    return {
      currentTab: "Buy",
      tabs: [{ name: "Buy" }, { name: "Rent" }],
      searchText: "",
      postedTime: `Today 1:00 PM - 5:00 PM`,
      ajaxData: "",
      isShow: true
    };
  },
  methods: {
    collections(pid) {
      let data = {
        propertyid: pid
      };
      Ajax.postCollections(data).then(res => {
        this.isShow = !this.isShow;
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
        name: "property",
        params: {
          pid: id
        }
      });
    },
    getAjax() {
      getProperties()
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
    this.getAjax();
  }
};
</script>
<style scoped lang="less">
.loading {
  margin: 20px auto;
}
.fa-heart {
  color: red !important;
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
        width: 5.8rem;
        height: 5.8rem;
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
  background: url(../../assets/img/main.png);
  background-position: left;
  background-size: cover;
}

.search-warp {
  background: #fff;
  width: 100%;
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0 0 12px 4px rgba(115, 117, 123, 0.12);
  margin: 0 15px;
  & /deep/ .van-hairline--top-bottom::after {
    border-width: 0px 0px 1px;
  }
  & /deep/ [class*="van-hairline"]::after {
    border-color: #ddd;
  }
  & /deep/ .van-tabs__line {
    background: #000 !important;
  }

  .relative {
    .search {
      border: none;
      outline: none;
      width: 100%;
      color: #333;
      padding-right: 26px;
      height: 44px;
      padding-left: 35px;
    }

    .fa-search {
      position: absolute;
      right: 15px;
      bottom: 13px;
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
    padding: 2px 15px;
  }
}
</style>