<template>
    <div class="container main">
        <van-nav-bar title="Setting" left-arrow @click-left="$router.go(-1)" fixed/>
        <ul class="text-left row links">
        <router-link tag="li" to="/user_center/settings/notifications">Notifications<i class="fa fa-fw fa-chevron-right fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/services">Terms of services<i class="fa fa-fw fa-chevron-right fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/version">Version
        </router-link>
        <li @touchend="sign_out">Log Out</li>
    </ul>
    </div>
</template>

<script>
import { getLogout } from "@/api/userCenter"
export default {
  data() {
    return {
    };
  },
  methods: {
    sign_out() {
      getLogout().then(res=>{});
      this.$store.commit("setUserName", "");
      this.$store.commit("setPortrait", "");
      this.$store.commit("setToken", "");
      this.$toast({
              message: "Logged out",
            });
      this.$router.replace("/home");
    }
  },
  created() {
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
