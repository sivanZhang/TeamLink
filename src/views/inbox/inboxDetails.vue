<template>
    <div class="container main">
      <van-nav-bar left-arrow @click-left="$router.go(-1)" fixed border />
      detail
    </div>
</template>
<script>
export default {
  data() {
    return {
      defultImg: require("../../assets/touxiang.png"),
      msgList: [
        {
          userName: "Chancy",
          time: "3:00 pm Mon",
          msg: "Epping Station,NSW,2000",
          content: "Hi,How are you?Do you want set an inspecttion......",
          img: ""
        }
      ]
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.container{
  height: 100vh;
}
</style>