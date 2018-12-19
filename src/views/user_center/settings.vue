<template>
    <div class="container main">
        <mt-header title="Setting" class="row header">
            <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
        </mt-header>
        <ul class="text-left row links">
        <router-link tag="li" to="/user_center/settings/notifications">Notifications<i class="fa fa-fw fa-chevron-right fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/services">Terms of services<i class="fa fa-fw fa-chevron-right fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/version">Version
        </router-link>
        <li @touchstart="sign_out">Log Out</li>
    </ul>
    </div>
</template>

<script>
import { getLogout } from "@/api/userCenter"
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      title: "settings"
    };
  },
  methods: {
    sign_out() {
      getLogout().then(res=>{});
      this.$store.commit("setUserName", "");
      this.$store.commit("setPortrait", "");
      this.$store.commit("setToken", "");
      Toast({
              message: "Logged out",
              position: "bottom",
              duration: 3000
            });
      this.$router.replace("/home");
    }
  },
  created() {
    document.title = "TeamLink-" + this.title;
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
ul.links {
  background-color: #fff;
  padding: 0px 15px;
  li {
    padding: 20px 15px;
    border-bottom: 1px solid #e1e4e8;
  }
}
</style>
