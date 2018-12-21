<template>
  <div class="container main">
     <van-nav-bar title="Select Region" left-arrow @click-left="$router.go(-1)" fixed/>
    <ul class="text-left row links">
      <li>
        <div>Country</div>
        <div>
          {{country}}
          <i class="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
        </div>
      </li>
      <li>
        <div>City</div>
        <div>
          {{city}}
          <i class="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  },
  data() {
    return {
      show: true,
      country: "Australia",
      city: "Sydney",
      slots: [
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot1",
          textAlign: "right"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot3",
          textAlign: "left"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
ul.links {
  background-color: #fff;
  padding: 0px 15px;
  li {
    padding: 20px 15px;
    border-bottom: 1px solid #e1e4e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    div {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      &:last-of-type {
        justify-content: flex-end;
        text-align: right;
        color: rgb(146, 146, 146); //灰色字体
        i {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>


