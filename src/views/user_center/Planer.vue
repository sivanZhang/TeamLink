<template>
  <div>
    <mt-header title="Inspection Planer" class="header">
      <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
    
  </div>
</template>

<script>
import laydate from "layui-laydate";
export default {
  mounted() {
    laydate.render({
      elem: "#test29",
      theme: "molv"
    });
  }
};
</script>

<style lang="less" scoped>
</style>

