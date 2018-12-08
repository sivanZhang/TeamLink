<template>
  <div class="container">
    <h4>Hello,{{phone_number}}</h4>
    <div class="Profile">
      <template v-if="!image_src">
        <div class="df-img">
          <div>B</div>
        </div>
       
      </template>
      <template v-else>
         <img class="user-img" :src="image_src" alt>
      </template>

      <i class="fa fa-pencil-square-o fa-lg" @touchstart="toChange" aria-hidden="true"></i>
    </div>
    <ul class="text-left row links">
      <router-link tag="li" to="/waiting">
        Inspection Planer
        <i class="fa fa-fw fa-calendar fa-pull-right" aria-hidden="true"></i>
      </router-link>
      <router-link tag="li" to="/user_center/settings">
        Setting
        <i class="fa fa-fw fa-cog fa-pull-right" aria-hidden="true"></i>
      </router-link>
      <router-link tag="li" to="/user_center/select_region">
        Select Region
        <i class="fa fa-fw fa-globe fa-pull-right" aria-hidden="true"></i>
      </router-link>
      <router-link tag="li" to="/waiting">
        Refer a Property
        <i class="fa fa-fw fa-gift fa-pull-right" aria-hidden="true"></i>
      </router-link>
      <router-link tag="li" to="/waiting">
        Switch to Agent
        <i
          class="fa fa-fw fa-exchange fa-rotate-90 fa-pull-right"
          aria-hidden="true"
        ></i>
      </router-link>
      <router-link tag="li" to="/user_center/feedback">
        Feedback
        <i class="fa fa-fw fa-commenting-o fa-pull-right" aria-hidden="true"></i>
      </router-link>
    </ul>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone_number: this.$store.state.user_name,
      image_src: this.$store.state.portrait,
      api: this.axios.defaults.baseURL,
      title: "More"
    };
  },
  methods: {
    toChange() {
      this.$router.push("/change");
    }
  },
  created() {
    document.title = "TeamLink-" + this.title;
  }
};
</script>

<style scoped lang="less">
ul.links {
  background-color: #fff;
  padding: 0px 15px;
  li {
    padding: 20px 15px;
  }
  li + li {
    border-top: 1px solid #e1e4e8;
  }
}
.df-img{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  font-size: 30px;
}
.user-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.Profile {
  position: relative;
  padding: 15px 0 30px;
  width: 100%;
  text-align: center;
  .fa-pencil-square-o {
    color: #bbb;
    position: absolute;
    bottom: 40px;
    right: 15%;
  }
}
</style>
