<style lang="less" scoped>
.main {
  overflow: unset;
  .nothing {
    background-color: rgb(245, 245, 245);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    margin: 0 15px;
    border-radius: 6px;
    padding: 20px;
    font-size: 14px;
  }

  .selectDate {
    color: rgb(0, 153, 153);
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
      background-color: rgb(155, 207, 216);
      display: flex;
      margin-left: 1px;
      flex-wrap: wrap;

      & > div {
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
    <Calendar :markDate="dates" :sundayStart="true" @choseDay="clickDay" @changeMonth="changeDate"></Calendar>

    <div class="selectDate">{{SelectDate||new Date().toDateString()}}</div>
    <div v-if="isPlan" class="nothing">nothing planned yet</div>
    <template v-else>
      <div v-for="(item,index) in planeList" :key="index" class="plan" @click="target(item.propertyId)">
        <div class="plan-date text-center">
          {{item.date}}
          <br>
          {{item.mouth}}
        </div>
        <div class="plan-detail">
          <div>{{item.title}}</div>
          <div>{{item.desc}}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Calendar from "@/plugins/calendar";
import AJAX from "@/api/inspection";
export default {
  components: {
    Calendar
  },
  data() {
    return {
      dates: [],
      planeList: [],
      isPlan: true,
      SelectDate: ""
    };
  },
  methods: {
    target(id){
      this.$router.push({
        name:'benaa',
        params:{
          pid:id
        }
      })
    },
    getAjax() {
      let self = this;
      AJAX.getInspections().then(res => {
        this.dates = res.data.msg;
      });
    },
    clickDay(data) {
      this.SelectDate = new Date(data).toDateString();
      let selectDate = this.SelectDate.split(" ");
      AJAX.getDate({
        params: {
          date: `${data}`.replace(/\//g, "-")
        }
      }).then(res => {
        this.planeList = res.data.msg;
        if (this.planeList.length > 0) {
          this.planeList.forEach(item => {
            item.date= selectDate[2],
             item.mouth= selectDate[1],
              item.desc= `${item.start_time}~${item.end_time}`
          });
          /* arr[0][0].inspections_calendar.forEach(item => {
            this.addcalendar(item.startday,item.endday)
          }); */
          this.isPlan = false;
        } else {
          this.isPlan = true;
        }
      });
    },
    /* addcalendar(StartDate,EndDate) {
      
      var startDate = new Date(StartDate); 
      var endDate = new Date(EndDate);
      var title = "My Inspections";
      var eventLocation = "Home";
      var notes = "There is an inspection event here.";
      var success = function(message) {
        Toast({
          message: "Success: Event has been added!",
          position: "bottom",
          duration: 3000
        });
      };
      var error = function(message) {
        Toast({
          message: "Error:" + message,
          position: "bottom",
          duration: 3000
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
    }, */
    changeDate(data) {
      console.log(data); //左右点击切换月份
    }
  },
  created() {
    this.getAjax();
    this.clickDay(new Date().toLocaleDateString());
  }
};
</script>