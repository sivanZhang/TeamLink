<template>
  <div id="property" class="container main warp-pb">
    <van-nav-bar title="Mordern Apartment" left-arrow @click-left="$router.go(-1)" fixed/>
    <!-- 轮播图 -->
    <div class="row">
      <van-swipe :autoplay="3000" :height="200" indicator-color="#009999">
        <van-swipe-item v-for="(item, index) in ajaxData.images" :key="index">
          <img class="swipe-img" :src="item">
        </van-swipe-item>
      </van-swipe>
      <div class="title">
        {{ajaxData.title}}
        <div>
          <i class="fa fa-picture-o" aria-hidden="true"></i>
          {{ajaxData.images.length}}
        </div>
      </div>
      <div class="number">
        <span>From $ {{ajaxData.attributes.real_estate_property_price}}</span>

        <div>
          {{ajaxData.attributes.real_estate_property_bedrooms}}
          <i
            class="fa fa-bed"
            aria-hidden="true"
          ></i>
          {{ajaxData.attributes.real_estate_property_bathrooms}}
          <i
            class="fa fa-bath"
            aria-hidden="true"
          ></i>
          {{ajaxData.attributes.real_estate_property_garage}}
          <i
            class="fa fa-car"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <Map :position="ajaxData.location" style="height:240px;width:100%;"></Map>
    </div>

    <section class="card key">
      <header>Key Details</header>
      <div>
        Property ID:
        <span>{{ajaxData.propertyId}}</span>
      </div>
      <div>
        Property Type:
        <span>{{`Apt`}}</span>
      </div>
      <div>
        Building Size:
        <span>square meters</span>
      </div>
      <div>
        Deposit:
        <span>{{`20%`}}</span>
      </div>
      <div>
        Strata:
        <span>{{`2000 pre quatre`}}</span>
      </div>
      <div>
        address:
        <span>{{ajaxData.attributes.real_estate_property_address}}</span>
      </div>
    </section>
    <section class="card">
      <header>Description</header>
      {{ajaxData.content}}
    </section>
    <section class="card">
      <header>Features</header>
      <p>Air Conditionin</p>
      <p>Intercom</p>
      <p>Built in wardrobes</p>
      <p>Gas store</p>
      <p>Study</p>
    </section>
    <Mortage></Mortage>
    <section class="card">
      <header>Inspections</header>
      <div class="inslist" v-for="(item,index) in ajaxData.inspections_calendar" :key="index">
        <label class="inspection">{{item.inspection}}</label>
        <span>
          <i
            class="fa fa-calendar-plus-o"
            aria-hidden="true"
            @touchend="addcalendar(ajaxData.propertyId,item.startday,item.endday)"
          ></i>
        </span>
      </div>
    </section>
    <div id="agent">
      <header>List Agent</header>
      <div class="img-warp">
        <img src="@/assets/agent.jpg" alt>
      </div>
      <div class="msg">
        <div class="name">{{`2434 Alcott Ct Point Loma`}}</div>
        <p>{{`Redfern,Sydney`}}</p>
        <div>E:{{`sales@home789.com.au`}}</div>
        <div>M:{{`123456789`}}</div>
      </div>
      <div class="btn-groups">
        <div>
          <i class="fa fa-commenting" aria-hidden="true" @click.passive="$router.push('/inboxDetails')"></i>Chat
        </div>
        <div>
          <span style="white-space:pre"></span>
          <a :href="`tel://55665566`">
            <i class="fa fa-phone" aria-hidden="true"></i>Call
          </a>
        </div>
      </div>
    </div>
    <section class="card">
      <header>School Information</header>
      <div class="tab-group">
        <button
          v-for="(tab,index) in tabs"
          :class="[{ active: currentTab == tab.name },'tab-button','common-btn']"
          @click.passive="currentTab = tab.name"
          :key="index"
        >{{ tab.name }}</button>
      </div>
      <ul>
        <li>
          <div>
            <div class="link-title">Cook Center for Learning & Univercity</div>9-12 Private,Special Education 0.3Miles
          </div>
          <div class="tag">NG</div>
        </li>
        <li>
          <div>
            <div class="link-title">Cook Center for Learning & Univercity</div>
            <span>9-12</span>
            <span>Private,Special</span>
            <span>Education</span>
            <span>0.3Miles</span>
          </div>
          <div class="tag">NG</div>
        </li>
      </ul>
      <div class="more">
        View 35 more schools
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </section>
    <section class="feature">
      <div>
        <div>
          <button @click.passive="collections(ajaxData.propertyId)">
            <i v-if="ajaxData.collection=='No'" class="fa fa-heart-o" aria-hidden="true"></i>
            <i v-else class="fa fa-heart" aria-hidden="true"></i>
          </button>
          <!--
          <button>
            <i class="fa fa-external-link" aria-hidden="true"></i>
          </button>
          -->
        </div>
        <button class="black-btn" @click.passive="$router.push('/home/property/enquiry')">Make an Enquiry</button>
      </div>
    </section>
    <footer-menu/>
  </div>
</template>
<script>
import Ajax from "@/api/collections";
import { getProperty } from "@/api/home";
import Mortage from "./mortage";
import Map from "./map";
export default {
  data() {
    return {
      //初始化默认字典
      currentTab: "All",
      ajaxData: null,
      tabs: [
        { name: "All" },
        { name: "Elementary" },
        { name: "High" },
        { name: "College&Unicersity" }
      ]
    };
  },
  methods: {
    addcalendar(propertyId, startdate, enddate) {
      let data = {
        propertyId,
        startdate,
        enddate
      };
      Ajax.postPlan(data)
        .then(res => {
          this.$toast({
            message: res.data.msg
          });
        })
        .catch();
      let startDate = new Date(startdate);
      let endDate = new Date(enddate);
      let title = "My Inspections";
      let eventLocation = "Home";
      let notes = "There is an inspection event here.";
      let success = function(message) {
        this.$toast({
          message: "Success: Event has been added!"
        });
      };
      let error = function(message) {
        this.$toast({
          message: "Error:" + message
        });
      };

      if (window.plugins !== undefined) {
        // 设备中执行的代码
        window.plugins.calendar.createEvent(
          title,
          eventLocation,
          notes,
          startDate,
          endDate,
          success,
          error
        );
      }
    },
    collections(pid) {
      let data = {
        propertyid: pid
      };
      Ajax.postCollections(data).then(res => {
        if (res.data.msg == "add") {
          this.ajaxData.collection = "Yes";
        }
        if (res.data.msg == "cancel") {
          this.ajaxData.collection = "No";
        }
      });
    },
    addPlan(propertyId, startdate, enddate) {}
  },
  components: {
    Map,
    Mortage
  },
  created(){
    this.$toast.loading({
        mask: false
      });
  },
  mounted() {
    getProperty(this.$route.params.pid)
      .then(res => {
        this.ajaxData = res.data.property[0];
        this.$toast.clear();
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="less" scoped>
@basegreen: rgb(146, 200, 0);
/*  .van-swipe-item {
    height: 100%;
    width: 100%;
  } */

.swipe-img {
  height: 100%;
  width: 100%;
}
.fa-calendar-plus-o {
  color: #ff5722;
  font-size: 14px;
}
.green {
  color: @basegreen;
}

.flex(@way, @way2) {
  display: flex;
  justify-content: @way;
  align-items: @way2;
}
#agent {
  padding: 15px 0;
  margin: 15px auto;
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  & > .img-warp {
    img {
      height: 100%;
      width: auto;
    }
    text-align: center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 1px solid #ddd;
    padding: 1px;
    overflow: hidden;
  }

  .msg {
    flex: 0 0 auto;
    margin-left: 30px;
  }

  .btn-groups {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 6px 0;
    margin-top: 10px;

    & > div {
      width: 50%;
      text-align: center;

      .fa {
        margin-right: 10px;
      }

      &:last-of-type {
        border-left: 1px solid #ddd;
      }
    }
  }
}

#property {
  .key {
    span {
      display: inline-block;
      width: 50%;
    }
  }

  header {
    font-size: 16px;
    font-weight: 600 !important;
    margin-bottom: 10px;
    width: 100%;
  }

  .title {
    display: flex;
    justify-content: space-between;
    background-color: #000;
    color: #fff;
    padding: 6px 12px;
  }

  .number {
    padding: 10px 15px 15px;

    & > span {
      color: rgb(177, 69, 55);
    }

    & > div {
      .fa {
        margin: 0 20px 0 10px;
      }
    }
  }

  .feature {
    & > div {
      .flex(space-between, flex-start);

      .fa-calendar-plus-o {
        margin-left: 15px;
      }
    }

    .black-btn {
      border: none;
      padding: 6px 12px;
    }

    padding: 30px 15px;

    button {
      height: 34px;

      .fa-heart {
        color: red;
      }
    }

    & > div > div {
      button {
        padding: 6px 12px;
        background: #fff;
        border: 1px solid #000;
        color: #000;
      }
    }
  }

  .card {
    border-bottom: 1px solid #ccc;
    .inslist + .inslist {
      margin-top: 8px;
    }
    .more {
      margin-top: 30px;
    }

    &:last-child {
      border-bottom-width: 0px;
    }

    .black-btn {
      border: none;
      padding: 6px 12px;
    }

    ul {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        font-size: 12px;

        .link-title {
          font-size: 14px;
        }

        .tag {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: grey;
          line-height: 24px;
          text-align: center;
        }

        & + li {
          border-top: 1px solid #ddd;
        }
      }
    }

    .tab-group {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .tab-button {
        height: 54px;
        border-radius: 0px;
        background: none;
        box-shadow: unset;
        border-bottom: transparent 2px solid;
        padding: 0px;
        flex: 1 1 auto;

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

    padding: 15px 0;

    header {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    & > div {
      .flex(space-between, flex-start);

      .fa-calendar-plus-o {
        margin-left: 15px;
      }
    }

    & > p {
      margin: auto;
    }
  }

  .tab-group {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .tab-button {
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

  .ivu-collapse > .ivu-collapse-item > .ivu-collapse-header {
    color: #fff;
    background-color: rgb(34, 34, 34);
  }
}

.ivu-input {
  border-radius: 16px;
  margin: 10px auto;
}
</style>