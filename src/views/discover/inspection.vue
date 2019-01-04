<template>
  <div class="main container">
    <header>
      <i class="fa fa-angle-left fa-2x" aria-hidden="true" @touchend="$router.push('/discover')"></i>
      <div class="datewarp">
        <template v-for="(item,index) in week">
          <div
            :key="item.datenumber"
            :class="{ active: classactive == item.weekname,plan: item.active,today:index==0 }"
            @click.passive="getAjax(item.Sdate),classactive = item.weekname"
          >
            <div>{{item.weekname}}</div>
            {{item.datenumber}}
          </div>
        </template>
      </div>
    </header>

    <div v-if="loading" class="enter">
      <van-loading/>
    </div>
    <template v-else>
      <div v-if="isPlan" class="nothing">nothing planned yet</div>
      <router-link
        v-else
        tag="div"
        v-for="(item,index) in agentList"
        class="suggest"
        :key="index"
        :to="{name:'property',params:{pid:item[0].propertyId}}"
      >
        <div class="suggest-title">
          <i class="fa fa-clock-o" aria-hidden="true"></i> {{item[0].inspections_calendar[0].inspection.split(' ')[1]}} {{item[0].inspections_calendar[0].inspection.split(' ')[2]}} {{item[0].inspections_calendar[0].inspection.split(' ')[3]}}
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
    </template>
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
      week: [],
      loading: true
    };
  },
  computed: {},
  methods: {
    //请求计划详情
    getAjax(date) {
      this.loading = true;
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
        this.loading = false;
      });
    }
  },
  created() {
    //请求计划时间列表
    AJAX.getInspectionsDates().then(res => {
      let DATEARR = res.data.msg;

      //初始化页面日期列表
      const DAY = 1000 * 60 * 60 * 24;
      for (let i = 0; i < 7; i++) {
        let after = new Date(new Date().setTime(Date.now() + DAY * i));
        this.week.push({
          weekname: after.toDateString().split(" ")[0],
          datenumber: after.getDate(),
          Sdate: `${after.getFullYear()}/${
            after.getMonth().toString().length == 1
              ? "0" + (after.getMonth() + 1)
              : after.getMonth() + 1
          }/${
            after.getDate().toString().length == 1
              ? "0" + after.getDate()
              : after.getDate()
          }`
        });
      }
      this.getAjax(this.week[0].Sdate);
      //如果日期列表与请求列表相同则渲染class
      this.week.map(item => {
        DATEARR.includes(item.Sdate)
          ? (item.active = true)
          : (item.active = false);
      });
      this.classactive = this.week[0].weekname;
    });
  },
  mounted() {}
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
.enter {
  display: flex;
  justify-content: center;
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

    & > div {
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