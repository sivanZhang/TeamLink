<template>
  <div>
    <div class="container">
      <mt-header title class="row header">
        <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
      </mt-header>
    </div>
    <form class="container">
      <div class="text-center title">
        <div>Sign in to TEAMLINK</div>
        <div class="line"></div>
      </div>
      <input
        v-model="user.phone"
        class="inp"
        type="text"
        id="phone_number"
        placeholder="username"
        style="background-color:white"
      >
      <!-- @change="test_phone"  -->
      <input
        v-model="user.password"
        class="inp"
        type="password"
        name="phone_number"
        placeholder="Password"
        style="background-color:white"
      >
       <Button :loading="loading" class="teamlinklogin"  @click="submit" :disabled="isDisabled" ghost>Log in</Button>
      <!--
      <div class="row">
        <router-link to="" class="col-xs-6 blue-link text-left">Create an account</router-link> 
        <router-link to="" class="col-xs-6 blue-link text-right">Forgot?</router-link> 
       
      </div> -->
    </form>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Ajax from "@/api/login";
export default {
  data() {
    return {
      loading:false,
      user: {
        phone: null,
        password: null
      }
    };
  },
  computed: {
    isDisabled() {
      if (!this.user.phone || !this.user.password) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    submit() {
      let data = {
        username: this.user.phone,
        password: this.user.password
      };
      this.loading=true;
      Ajax.getLogin(data)
        .then(res => {
          this.loading=false;
          if (res.data.status == "ok") {
            Toast({
              message: res.data.msg,
              position: "bottom",
              duration: 3000
            });
            this.$store.commit("setToken", `JWT ${res.data.token}`);
            this.$store.commit("setUserName", res.data.username);
            this.$store.commit("setPortrait", res.data.portrait);
            let redirect = decodeURIComponent(this.$route.query.redirect || '/');
            this.$router.push({
            path: redirect
          })
          } else if (res.data.status == "error") {
            Toast({
              message: res.data.msg,
              position: "bottom",
              duration: 3000
            });
          }
        })
        .catch(error => {
          this.loading=false;
          Toast({
            message: error,
            position: "bottom",
            duration: 3000
          });
        });
    } /* ,
    test_phone() {
      if (!/[0-9]+/.test(this.user.phone)) {
        this.setInfo("Please enter your correct phone number!");
      }
    } */
  },
  mounted() {}
};
</script>

<style scoped>
.header {
  position: fixed !important;
  top: 0;
  width: 100%;
  border-bottom: 1px solid transparent;
  z-index: 200;
  height: 30px !important;
}
.teamlinklogin{
  background-color: #000;
}
.line {
  display: inline-block;
  width: 100px;
  border-bottom: 2px solid #333;
  transform: translateY(-22px);
}

.title {
  font-size: 22px;
  font-family: sans-serif;
}

.inp {
  display: block;
  width: 100%;
  border-bottom: solid #333;
  outline: none;
  border-width: 0 0 1px 0;
  height: 42px;
  margin: 15px auto;
  padding: 0 6px;
  background-color: #f4f5f9;
  border-radius: 0px;
  color: #333;
  box-shadow: unset;
}
.row a {
  color: gray;
}
.ivu-btn-ghost.ivu-btn-dashed:hover, .ivu-btn-ghost.ivu-btn-default:hover {
    color: #fff;
    border-color: #000;
}
.ivu-btn {
  width: 100%;
  margin: 15px auto;
  height: 42px;
  border-radius: 0px;
  background: #000;
  color: #fff;
  background-color: #000;
}.ivu-btn-ghost.ivu-btn-dashed[disabled], .ivu-btn-ghost.ivu-btn-default[disabled], .ivu-btn-ghost.ivu-btn-error[disabled], .ivu-btn-ghost.ivu-btn-info[disabled], .ivu-btn-ghost.ivu-btn-primary[disabled], .ivu-btn-ghost.ivu-btn-success[disabled], .ivu-btn-ghost.ivu-btn-warning[disabled]{
  background-color: rgba(0, 0, 0, .8);
  color: #fff;
}

form {
  position: absolute;
  bottom: 57%;
  transform: translateY(45%);
  width: 100%;
}

input + input {
  margin-top: 15px;
}

input::-webkit-input-placeholder,
input::-moz-placeholder ,
input:-moz-placeholder,
input:-ms-input-placeholder
 {
  color: #aaa;
}
 
input:-webkit-autofill,
select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset!important;
     
}
 
</style>
