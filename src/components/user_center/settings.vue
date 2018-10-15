<template>
    <div class="container">
        <mt-header title="Setting" class="row">
            <router-link to="/user_center" slot="left">
                 <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <ul class="text-left row links">
        <router-link tag="li" to="/waiting">Notifications<i class="fa fa-fw fa-chevron-right fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/waiting">Terms of services<i class="fa fa-fw fa-chevron-right fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/waiting">Version
        </router-link>
        <li @click="sign_out">Log Out</li>
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
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
    document.title = "TeamLink-" + this.title;
  }
};
</script>

<style lang="less" scoped>
ul.links {
  background-color: #fff;
  padding: 0px 15px;
  margin-top: 30px;
  li {
    padding: 20px 15px;
    border-bottom: 1px solid #e1e4e8;
  }
}
</style>
