<template>
  <div class="container main">
    <mt-header title="Notificatiobs" class="header row">
      <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
    <ul class="text-left row links">
      <li>
        <div>
          <header>Receive notificatiobs</header>Receive messages from agens.
        </div>
        <mt-switch v-model="switch1"></mt-switch>
      </li>
    </ul>
    <div class="title">
      <header>Messages</header>Receive messages from agens
    </div>
    <ul class="text-left row links">
      <li>
        <div>
          <header>Email</header>
        </div>
        <mt-switch v-model="switch2"></mt-switch>
      </li>
      <li>
        <div>
          <header>SMS</header>
        </div>
        <mt-switch v-model="switch3"></mt-switch>
      </li>
    </ul>
    <div class="title">
      <header>Reminders</header>Receive inspection reminders,new opening for inspections,pricing notices.
    </div>
    <ul class="text-left row links">
      <li>
        <div>
          <header>Email</header>
        </div>
        <mt-switch v-model="switch4"></mt-switch>
      </li>
      <li>
        <div>
          <header>SMS</header>
        </div>
        <mt-switch v-model="switch5"></mt-switch>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switch1: true,
      switch2: false,
      switch3: false,
      switch4: false,
      switch5: false

    };
  }
};
</script>
<style lang="less" scoped>
.title {
  padding: 20px 0;
  header {
    font-size: 14px;
    font-weight: 600;
  }
  font-size: 12px;
}
.links {
  background-color: #fff;
  padding: 0 15px;
  li {
    header {
      font-size: 14px;
      font-weight: 600;
    }
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #e1e4e8;
    & /deep/ .mint-switch-input:checked + .mint-switch-core {
      border-color: rgb(0, 153, 153);
      background-color: rgb(0, 153, 153);
    }
    & /deep/ .mint-switch-core {
      width: 44px;
      height: 24px;
    }
    & /deep/ .mint-switch-core::after {
    width: 22px;
    height: 22px;}
  }
  & /deep/ .mint-switch-core::before {
    width: 22px;
    background-color: unset;
}
}
</style>

