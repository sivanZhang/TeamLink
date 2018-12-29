<template>
  <div id="search">
    <GmapMap :center="center" :zoom="17" :options="{
   zoomControl: true,
   mapTypeControl: true,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
   disableDefaultUi: false
 }" map-type-id="terrain" style="width: 100%; height: 100vh;">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :icon="{ url: require('../../assets/location.svg')}"
      />
    </GmapMap>

    <div class="input-group">
      <i class="fa fa-angle-left fa-2x" @touchend="back" aria-hidden="true"></i>
      <i class="fa fa-search" @touchend="search(searchText)" aria-hidden="true"></i>
      <input
        class="form-control"
        v-model="searchText"
        @keyup.enter="search(searchText)"
        type="text"
      >
      <span class="input-group-addon">
        <i @touchend="showFilters" class="fa fa-sliders" aria-hidden="true"></i>
      </span>
    </div>
    <div class="data-warp" v-show="isShow">
      <div class="keywords">
        <div><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>{{AjaxData.length||0}} Listings</div>
        <div @touchend="viewAll">View All</div>
      </div>
      <div v-if="AjaxData.length" class="p-data-warp">
        <div class="clock">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
        </div>
        <div class="p-data" @click="target(AjaxData[0][0].propertyId)">
          <div class="left">
            <img :src="AjaxData[0][0].images[0]" alt>
            <!-- <i @click.stop="collections(AjaxData[0][0].propertyId)" :class="['fa',AjaxData[0][0].collection=='Yes'?`fa-heart`:`fa-heart-o`]" class="fa" aria-hidden="true"></i> -->
          </div>
          <div class="right">
            <div>{{AjaxData[0][0].title}}</div>
            <div class="adress">Modern Apartment</div>
            <div class="money">$ {{AjaxData[0][0].attributes.real_estate_property_price}}</div>
            <div>
              {{AjaxData[0][0].attributes.real_estate_property_bedrooms}}
              <i
                class="fa fa-bed"
                aria-hidden="true"
              ></i>
              {{AjaxData[0][0].attributes.real_estate_property_bathrooms}}
              <i
                class="fa fa-bath"
                aria-hidden="true"
              ></i>
              {{AjaxData[0][0].attributes.real_estate_property_garage}}
              <i
                class="fa fa-car"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <footer-menu/>
    </div>

    <loading v-if="loading"></loading>
    <!-- <filters v-show="filtersShow"></filters> -->
  </div>
</template>
<script>
import { getSearch } from "@/api/home";
export default {
  data() {
    return {
      isShow: false,
      postedTime: "",
      /* filtersShow: false, */
      searchText: "",
      loading: false,
      AjaxData: [],
      keyword: "",
      center: { lat: 45.508, lng: -73.587 },
      markers: [{ position: { lat: 45.508, lng: -73.587 } }]
    };
  },
  methods: {
    viewAll() {
      // prep some variables
      this.$store.commit("set_search", this.searchText);
      this.$router.push({
        name: "mapExploreList",
        params: {
          tid: this.$route.params.tid,
        },
      });
    },
    showFilters() {
      this.$router.push("/filters");
    },
    target(id) {
      this.$router.push({
        name: "property",
        params: {
          pid: id
        }
      });
    },
    search(keyword) {
      if (!keyword) {
        return;
      }
      this.isShow = true;
      let params = {
        title: keyword
      };
      getSearch(params)
        .then(res => {
          this.loading = false;

          this.AjaxData = res.data.properties;
          this.keyword = keyword;
          this.markers = [];
          this.center = {
            lat: parseFloat(this.AjaxData[0][0].location[0]),
            lng: parseFloat(this.AjaxData[0][0].location[1])
          };
          this.AjaxData.forEach(item => {
            this.markers.push({
              position: {
                lat: parseFloat(item[0].location[0]),
                lng: parseFloat(item[0].location[1])
              },
              title: 'Hello World!'
            });
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    let params = this.$store.state.search_text;
    this.search(params);
  },
  mounted() {
    let self = this;
    if (self.$store.state.search_text != "") {
      let params = self.$store.state.search_text;
      self.search(params);
      self.$store.commit("set_search", "");
      console.log(self.$store.state.search_text);
    }
  }
};
</script>
<style lang="less" scoped>
.data-warp {
  padding: 10px 15px;
  position: fixed;
  bottom: 48px;
  width: 100%;
  background-color: #fff;
  .keywords {
    i{
      margin-right: 15px;
    }
    display: flex;
    justify-content: space-between;
  }
  .p-data-warp {
    .clock {
      color: #fff;
      background: rgb(255, 87, 34);
      padding: 2px 10px;
      width: 100%;
      margin-top: 8px;
    }
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    .p-data {
      display: flex;
      justify-content: flex-start;
      margin-right: 15px;
      border: 1px solid #ddd;
      width: 100%;

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
}

.fa {
  font-size: 16px;
}
.suggest {
  & {
    margin: 20px 15px;
  }

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
    height: 190px;
    overflow: hidden;

    img {
      height: auto;
      width: 100%;
    }
  }
}

.input-group {
  margin-top: 10px;
  padding: 0 10px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;

  .input-group-addon {
    margin-left: 15px;
    background-color: unset;
    border: unset;
  }

  input.form-control {
    display: table-cell;
    width: 100%;
    border-radius: unset;
    border: 0px;
    padding: 10px 30px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  }

  .fa-angle-left {
    position: absolute;
    top: 6px;
    left: 25px;
    z-index: 4;
    font-size: 26px;
  }

  .fa-search {
    position: absolute;
    top: 11px;
    right: 50px;
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

#search {
  & /deep/ div[dir="ltr"]:not(.gm-svpc) {
    top: 50px !important;
  }
  & /deep/ .gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom {
    bottom: 60% !important;
  }
  & /deep/ .gm-style-mtc {
    margin-top: 50px !important;
  }
  & /deep/ .gm-control-active.gm-fullscreen-control {
    margin: 60px 10px 10px !important;
  }
}
</style>