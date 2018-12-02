<template>
  <div class="container main">
    <mt-header title="teamlink" class="row header">
    </mt-header>
    <mt-swipe class="row" :auto="3000">
      <mt-swipe-item  v-for="(item,index) in agentList" :key="index" @touchstart.native="target(item[0].propertyId)">
        <img :src="item[0].images[0]" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="group">
      <router-link tag="div" to="/agent">
        <img src="../../assets/s1.png" alt="">
      </router-link>
      <div>
        <img src="../../assets/s4.png" alt="" @touchstart="getHtml(`http://www.demo-it.com.au/teamlink1/open-houses/`)">
      </div>
      <div>
        <img src="../../assets/s3.png" alt="" @touchstart="getHtml(`http://www.home789.com/gfembed/?f=86`)">
      </div>
      <router-link tag="div" to="/agent">
        <img src="../../assets/s2.png" alt="">
      </router-link>
    </div>
    <h5 class="suggestd-header">Suggestd for you</h5>
    <router-link
        tag="div"
        v-for="(item,index) in agentList"
        class="suggest"
        :key="index"
        :to="{name:'benaa',params:{pid:item[0].propertyId}}"
      >
        <div class="suggest-title">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
          {{postedTime}}
        </div>
        <div class="suggest-details">
          <img :src="item[0].images[0]" alt>
        </div>
        <div class="suggest-info">
          <div>{{item[0].title}}</div>
          <div>
            <i class="fa fa-picture-o" aria-hidden="true"></i>
            {{item[0].images.length}}
          </div>
        </div>
        <div class="container">
          <h5>Modern Apartment</h5>
          <div class="price">${{item[0].attributes.real_estate_property_price}}</div>
          <div class="outfit">
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
      </router-link>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Discover",
        postedTime: `Today 1:00 PM - 5:00 PM`,
        info: `Epping Station,NSW,2000`,
        pictureNumber: 3,
        price: 7000,
        outfit: {
          bed: 3,
          toilet: 2,
          carport: 1
        }
      };
    },
    computed:{
      agentList(){
        return this.$store.state.agents
      }
    },
    methods: {
      target(id) {
      this.$router.push({
        name: "benaa",
        params: {
          pid: id
        }
      });
    },
      getHtml(val) {
        this.$store.commit("setUrl", val);
        this.$router.push("/iframe");
      }
    },
    mounted() {
      document
        .querySelector("body")
        .setAttribute("style", "background-color:#fff");
      document.title = "TeamLink " + this.title;
      /* 设置展图宽高相等 */
      let imgWidth = $(".item-img").width() / 2;
      $(".item-img>img").height(imgWidth);
      /*  var Mheight = $(window).height();
       $(".main").height(`${Mheight - 52}px`); */
    }
  };
</script>

<style lang="less" scoped>
  .suggestd-header {
    margin: 0px;
    padding: 0 0 10px 0;
  }

.suggest {
  & {
    margin: 15px 0;
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
    height: 180px;
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

  .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;

    .mint-swipe-item {
      img {
        height: 100%;
        width: 100%;
        overflow: hidden;
      }
    }
  }

  .group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
      width: 48%;
      padding-bottom: 15px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
  }
</style>
