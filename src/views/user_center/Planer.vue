

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
    background: #fff !important;
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
  .plan {
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
    <div v-if="isPlan" class="nothing">nothing planned yet</div>
    <template v-else>
      <div class="plan">
        <div class="plan-date text-center">20
          <br>AUG
        </div>
        <div class="plan-detail">2222</div>
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
      isPlan: true
    };
  },
  methods: {
    getAjax() {
      let self = this;
      AJAX.getInspections().then(res => {
        let arr = res.data.msg;
        arr.forEach(item => {
          self.demoEvents.push({
            date: "",
            title: item[0].attributes.real_estate_property_address,
            desc: item[0].title
          });
        });
      });
    },
    handleDayChanged(month) {
      console.log(month.date);
      AJAX.getDate({
        params: {
          date: `${month.date}`.replace(/\//g, "-")
        }
      }).then(res => {
        console.log(res.data.msg);
        if (res.data.msg.length<1) {
          this.isPlan = true;
        } else {
          this.isPlan = false;
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