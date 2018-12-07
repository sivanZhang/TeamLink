<template>
    <div class="container main">
        <mt-header title="Setting" class="row header">
            <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
        </mt-header>
        <ul class="text-left row links">
        <router-link tag="li" to="/waiting">Notifications<i class="fa fa-fw fa-chevron-right fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/waiting">Terms of services<i class="fa fa-fw fa-chevron-right fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/waiting">Version
        </router-link>
        <li @touchstart="sign_out">Log Out</li>
    </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "settings"
    };
  },
  methods: {
    sign_out() {
      this.$store.commit("setUserName", "");
      this.$store.commit("setPortrait", "");
      this.$store.commit("setToken", "");
      $().message("Logged out");
      this.$router.push("/login");
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
  margin-top: 20px;
  li {
    padding: 20px 15px;
    border-bottom: 1px solid #e1e4e8;
  }
}
</style>
