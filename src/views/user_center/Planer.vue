

<style lang="less" scoped>
.main {
  & /deep/ .__vev_calendar-wrapper .cal-wrapper .cal-header .title {
    color: rgb(0, 153, 153);
    font-size: 16px;
  }
  & /deep/ .__vev_calendar-wrapper .events-wrapper .event-item .title {
    overflow: hidden;
    font-size: 14px;
  }
  & /deep/ .events-wrapper {
    display: none;
  }
  & /deep/ .__vev_calendar-wrapper .events-wrapper .date {
    display: none;
  }
  .nothing {
    background-color: #edefef;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    margin: 0 15px;
    border-radius: 6px;
    padding: 20px;
    font-size: 14px;
  }

  .selectDate{
    color:  rgb(0, 153, 153);
    font-size: 14px;
    padding: 15px;
  }
  .plan {
    margin-bottom: 15px;
    height: 100px;
    padding: 0 15px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    color: #fff;
    .plan-date {
      border-radius: 6px;
      width: 20%;
      background-color: rgb(0, 153, 153);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .plan-detail {
      border-radius: 6px;
      width: 80%;
      background-color: rgba(0, 153, 153, 0.4);
      display: flex;
      flex-wrap: wrap;
      &>div{
width: 100%;
      }
      align-items: center;
      padding: 15px;
    }
  }
}
</style>
<template>
  <div class="main">
    <mt-header title="Inspection Planer" class="header">
      <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
    <vue-event-calendar @day-changed="handleDayChanged" @month-changed="handleMonthChanged"></vue-event-calendar>


    <div class="selectDate">{{SelectDate||new Date().toDateString()}}</div>
    <div v-if="isPlan" class="nothing">nothing planned yet</div>
    <template v-else>
      <div v-for="(item,index) in planeList" :key="index" class="plan">
        <div class="plan-date text-center">{{item.date}}
          <br>{{item.mouth}}
        </div>
        <div class="plan-detail">
          <div>{{item.title}}</div> <div>{{item.desc}}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import AJAX from "@/api/inspection";
export default {
  data() {
    return {
      planeList: [],
      isPlan: true,
      SelectDate:''
    };
  },
  methods: {
    getAjax() {
      let self = this;
      AJAX.getInspections().then(res => {});
    },
    handleDayChanged(month) {
      this.SelectDate = new Date(month.date).toDateString();
           let selectDate =this.SelectDate.split(" ")
      AJAX.getDate({
        params: {
          date: `${month.date}`.replace(/\//g, "-")
        }
      }).then(res => {
        let arr = res.data.msg;
        if (arr.length > 0) {
          this.planeList = [];
          arr[0][0].inspections.forEach(item => {
            this.planeList.push({
              date: selectDate[2],
              mouth:selectDate[1],
              title: item,
              desc: arr[0][0].title
            });
          });
          this.isPlan = false;
        } else {
          this.isPlan = true;
        }
      });
    },
    handleMonthChanged(day) {
      console.log(day);
    }
  },
  created() {
    this.getAjax();
  }
};
</script>