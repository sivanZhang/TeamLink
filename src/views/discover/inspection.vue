<template>
  <div class="main container">
    <header>
      <i class="fa fa-angle-left fa-2x" aria-hidden="true" @touchend="$router.push('/discover')"></i>
      <div class="datewarp">
        <template v-for="(item,index) in week">
          <div :key="item.datenumber" :class="{ active: classactive == item.weekname,plan: item.active,today:index==0 }" @click="getAjax(item.Sdate),classactive = item.weekname">
            <div>{{item.weekname}}</div>
            {{item.datenumber}}
          </div>
        </template>
      </div>
    </header>
    <div v-if="isPlan" class="nothing">nothing planned yet</div>
    <router-link v-else tag="div" v-for="(item,index) in agentList" class="suggest" :key="index" :to="{name:'property',params:{pid:item[0].propertyId}}">
      <div class="suggest-title">
        <i class="fa fa-clock-o" aria-hidden="true"></i>
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
          <i class="fa fa-bed" aria-hidden="true"></i>
          {{item[0].attributes.real_estate_property_bathrooms}}
          <i class="fa fa-bath" aria-hidden="true"></i>
          {{item[0].attributes.real_estate_property_garage}}
          <i class="fa fa-car" aria-hidden="true"></i>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
  import AJAX from "@/api/inspection";
  export default {
    data() {
      return {
        dates: [],
        agentList: "",
        classactive: "",
        isPlan: true,
        week: []
      };
    },
    computed: {},
    methods: {
      //请求计划详情
      getAjax(date) {
        AJAX.getInspectionstPlan({
          params: {
            date: date.replace(/\//g, "-")
          }
        }).then(res => {
          this.agentList = res.data.msg;
          if (this.agentList.length > 0) {
            this.isPlan = false;
          } else {
            this.isPlan = true;
          }
        });
      }
    },
    created() {
      //请求计划时间列表
      AJAX.getInspectionsDates().then(res => {
        let DATEARR = res.data.msg;
        //初始化页面日期列表
        let nowtime = new Date().getTime();
        const DAY = 1000 * 60 * 60 * 24;
        let after0 = new Date(new Date().setTime(nowtime + DAY * 0)),
          after1 = new Date(new Date().setTime(nowtime + DAY * 1)),
          after2 = new Date(new Date().setTime(nowtime + DAY * 2)),
          after3 = new Date(new Date().setTime(nowtime + DAY * 3)),
          after4 = new Date(new Date().setTime(nowtime + DAY * 4)),
          after5 = new Date(new Date().setTime(nowtime + DAY * 5)),
          after6 = new Date(new Date().setTime(nowtime + DAY * 6));
        let arr = [{
            weekname: after0.getDay(),
            datenumber: after0.getDate(),
            Sdate: after0.toLocaleDateString(),
          },
          {
            weekname: after1.getDay(),
            datenumber: after1.getDate(),
            Sdate: after1.toLocaleDateString(),
          },
          {
            weekname: after2.getDay(),
            datenumber: after2.getDate(),
            Sdate: after2.toLocaleDateString(),
          },
          {
            weekname: after3.getDay(),
            datenumber: after3.getDate(),
            Sdate: after3.toLocaleDateString(),
          },
          {
            weekname: after4.getDay(),
            datenumber: after4.getDate(),
            Sdate: after4.toLocaleDateString(),
          },
          {
            weekname: after5.getDay(),
            datenumber: after5.getDate(),
            Sdate: after5.toLocaleDateString(),
          },
          {
            weekname: after6.getDay(),
            datenumber: after6.getDate(),
            Sdate: after6.toLocaleDateString(),
          }
        ];
        arr.map((item, index) => {
          switch (item.weekname) {
            case 0:
              item.weekname = `Sun`;
              break;
            case 1:
              item.weekname = `Mon`;
              break;
            case 2:
              item.weekname = `Tue`;
              break;
            case 3:
              item.weekname = `Wed`;
              break;
            case 4:
              item.weekname = `Thu`;
              break;
            case 5:
              item.weekname = `Fri`;
              break;
            case 6:
              item.weekname = `Sat`;
              break;
          }
        });
        arr.map(item => {
          DATEARR.includes(item.Sdate) ? item.active = true : item.active = false;
        });
        this.week = arr.concat();
        this.classactive = this.week[0].weekname;
        this.getAjax(this.week[0].Sdate);
      });
    },
    mounted() {
    }
  };
</script>
<style lang="less" scoped>
  .main {
    margin-top: 50px;

    .nothing {
      background-color: rgb(245, 245, 245);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      margin: 0 15px;
      border-radius: 6px;
      padding: 20px;
      font-size: 14px;
    }
  }

  .fa-angle-left {
    margin-right: 15px;
  }

  .mybtn {
    color: #656b79;
    background-color: white;
    border-color: white;
    border: none;
    padding-left: 0px !important;
    -webkit-box-shadow: None;
    box-shadow: none;
  }

  .active {
    font-weight: 600;
  }

  .plan {
    color: rgb(255, 87, 34);
  }

  header {
    padding: 0 15px;
    position: fixed;
    background-color: #fff;
    top: 0;
    left: 0;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .datewarp {
      width: 100%;
      overflow-x: scroll;
      white-space: nowrap;

      &>div {
        display: inline-block;
        width: 20% !important;
      }
    }
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
      padding: 6px 12px;
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
      padding: 2px 15px;
    }
  }

  .today {
    position: relative;
  }

  .today::before {
    content: " ";
    width: 40%;
    height: 1px;
    background-color: #009999;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>