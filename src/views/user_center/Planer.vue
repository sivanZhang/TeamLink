

<style lang="less" scoped>
.main {
  & /deep/ .__vev_calendar-wrapper .events-wrapper .event-item .title {
    overflow: hidden;
    font-size: 14px;
  }
  & /deep/ .events-wrapper {
    background: #fff!important;
  }
  & /deep/ .__vev_calendar-wrapper .events-wrapper .date{
    display: none;
  }
}
</style>
<template>
  <div class="main">
    <mt-header title="Inspection Planer" class="header">
      <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
    <vue-event-calendar
      :events="demoEvents"
      @day-changed="handleDayChanged"
      @month-changed="handleMonthChanged"
    >
    </vue-event-calendar>
    <!--  <vue-event-calendar :events="demoEvents">
      <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
          {{event}}
        </div>
      </template>
    </vue-event-calendar>-->
  </div>
</template>

<script>
import AJAX from "@/api/inspection";
export default {
  data() {
    return {
      demoEvents: []
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
      console.log(month);
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