
<style lang="less" scoped>#mortage{
    margin-top: 30px;
}
table{
    width: 100%;
    & /deep/ .ivu-input{
        border-radius: 0px;
    }
}
</style>

<template>
  <div id="mortage">
      <h4 class="text-center">
          mortgage
      </h4>
      <table>
      <tr>
        <td>Loan Amount:</td>
        <td>
             <Input v-model.number="amt" placeholder=""/>
        </td>
      </tr>
      <tr>
        <td>Term [year]:</td>
        <td>
            <Input v-model.number="trm" placeholder=""/>
        </td>
      </tr>
      <tr>
        <td>Interest Rate in %</td>
        <td>
          <Input v-model.number="apr" placeholder=""/>
        </td>
      </tr>
      <tr>
          <td>
            <Button @click="getValues()" type="success" ghost>compute</Button>
        </td>
        <td>
            <Input v-model.number="pmt" placeholder=""/>
        </td>
      </tr>
    </table>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      apr: "",
      amt: "",
      trm: "",
      pmt: ""
    };
  },
  methods: {
    getValues() {
      this.apr /= 1200;
      this.trm *= 12;
      let payment = (this.amt * (this.apr * Math.pow(1 + this.apr, this.trm))) / (Math.pow(1 + this.apr, this.trm) - 1)
      this.pmt = `$ ${payment.toFixed(2)} /Month`
    }
  }/* ,
  mounted() {
    var term;
    var apr;
    var amt;
    var mPmt;

    window.onload = function() {
      document.getElementById("apr").focus();
      document.getElementById("sbt").onclick = getValues;
    };

    //use toFixed(2) to set the precision of the mPayment. Use it on an int.
    function getValues() {
      term = document.getElementById("trm").value;
      apr = document.getElementById("apr").value;
      amt = document.getElementById("amt").value;
      apr /= 1200;
      term *= 12;

      
      mPmt = calculatePayment();
      document.getElementById("pmt").value = "$" + mPmt.toFixed(2) + "/Month";
    }

    function calculatePayment() {
      var payment =
        (amt * (apr * Math.pow(1 + apr, term))) / (Math.pow(1 + apr, term) - 1);
      return payment;
    }
  } */
};
</script>