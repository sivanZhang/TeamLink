<template>
    <div>
        <mt-header title="Settings">
            <router-link to="/user-center" slot="left">
                 <mt-button icon="back">back</mt-button>
            </router-link>
        </mt-header>
        <ul class="text-left row links">
        <router-link tag="li" to="/waiting">Inspection Planer<i class="fa fa-fw fa-calendar fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/waiting">Settings<i class="fa fa-fw fa-cog fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/waiting">Select Region<i class="fa fa-fw fa-globe fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/waiting">Refer a Property<i class="fa fa-fw fa-gift fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <router-link tag="li" to="/waiting">Switch to Agent<i class="fa fa-fw fa-exchange fa-rotate-90 fa-pull-right" aria-hidden="true"></i>
        </router-link>
        <li @click="sign_out">Sign out<i class="fa fa-pull-right fa-sign-out" aria-hidden="true"></i></li>
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
  li {
    padding: 20px 15px;
  }
  li + li {
    border-top: 1px solid #e1e4e8;
  }
}
</style>
