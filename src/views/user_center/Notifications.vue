<template>
  <div class="container main">
    <van-nav-bar title="Notificatiobs" left-arrow @click-left="$router.go(-1)" fixed />
    <ul class="text-left row links">
      <li>
        <div>
          <header>Receive notificatiobs</header>Receive messages from agens.
        </div>
        <van-switch active-color="#009999" v-model="switch1" size="20px" />
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
        <van-switch active-color="#009999" v-model="switch2" size="20px" />
      </li>
      <li>
        <div>
          <header>SMS</header>
        </div>
        <van-switch active-color="#009999" v-model="switch3" size="20px" />
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
        <van-switch active-color="#009999" v-model="switch4" size="20px" />
      </li>
      <li>
        <div>
          <header>SMS</header>
        </div>
        <van-switch active-color="#009999" v-model="switch5" size="20px" />
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
    }
  }
</style>