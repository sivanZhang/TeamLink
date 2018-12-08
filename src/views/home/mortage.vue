
<style lang="less" scoped>
#mortage {
  padding-bottom: 15px;
  border-bottom:1px solid #ccc; 
  .ivu-btn-ghost.ivu-btn-success{
      border-radius: 0px;
    }
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 6px;
    text-align: left;
    margin-top: 15px;
  }
  & /deep/ .ivu-input {
    border-radius: 0px !important;
    margin: 6px auto;
  }
}
table {
  width: 100%;
} /*  */
</style>

<template>
  <div id="mortage">
    <h4 class="text-center">mortgage</h4>
    <table>
      <tr>
        <td>Loan Amount:</td>
        <td>
          <Input v-model.number="arr.amt" placeholder/>
        </td>
      </tr>
      <tr>
        <td>Term [year]:</td>
        <td>
          <Input v-model.number="arr.trm" placeholder/>
        </td>
      </tr>
      <tr>
        <td>Interest Rate in %</td>
        <td>
          <Input v-model.number="arr.apr" placeholder/>
        </td>
      </tr>
      <tr>
        <td>
          <Button
            @touchstart.native="getValues()"
            type="success"
            ghost
            :disabled="isDisabled"
          >compute</Button>
        </td>
        <td>{{arr.pmt}}</td>
      </tr>
    </table>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      isDisabled: false,
      arr: {
        apr: "",
        amt: "",
        trm: "",
        pmt: ""
      }
    };
  },
  watch: {
    arr: {
      handler: () => {
        //this.isDisabled = false;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getValues() {
      this.arr.apr /= 1200;
      this.arr.trm *= 12;
      let payment =
        (this.arr.amt *
          (this.arr.apr * Math.pow(1 + this.arr.apr, this.arr.trm))) /
        (Math.pow(1 + this.arr.apr, this.arr.trm) - 1);
      if (this.arr.apr != "" && this.arr.trm != "" && this.arr.amt != "") {
        this.arr.pmt = `$ ${payment.toFixed(2)} /Month`;
        //this.isDisabled = true;
      }
      this.arr.apr *= 1200;
      this.arr.trm /= 12;

      /*  [this.arr.apr,this.arr.amt,this.arr.trm]=['','',''] */
    }
  },
  mounted() {
    //js 在这些
  }
};
</script>
