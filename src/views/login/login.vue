<template>
  <div>
    <div class="container">
      <mt-header title="Login" class="row header">
        <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
        <mt-button @click="$router.push(`/home`)" slot="right">home</mt-button>
      </mt-header>
    </div>
    <form class="container">
      <div class="text-center title">
        <div>Sign in to TEAMLINK</div>
        <div class="line"></div>
      </div>
      <input
        v-model="user.phone"
        class="form-control"
        type="text"
        id="phone_number"
        placeholder="Phone"
      >
      <!-- @change="test_phone"  -->
      <input
        v-model="user.password"
        class="form-control"
        type="password"
        name="phone_number"
        placeholder="Password"
      >
      <button
        id="submit"
        @click="submit"
        type="button"
        class="black-btn common-btn"
        :disabled="isDisabled"
      >Log in</button>
      <div class="row">
        <router-link to="/signup" class="col-xs-6 blue-link text-left">Create an account</router-link>
        <router-link to="/forgot" class="col-xs-6 blue-link text-right">Forgot?</router-link>
      </div>
      <div v-show="msg.length" class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        {{message}}
      </div>
    </form>
  </div>
</template>

<script>
import Ajax from "@/api/login";
export default {
  data() {
    return {
      api: this.axios.defaults.baseURL,
      msg: [],
      user: {
        phone: null,
        password: null
      }
    };
  },
  computed: {
    message() {
      return this.msg.toString();
    },
    isDisabled() {
      if (!this.user.phone || !this.user.password) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    /* 设置提示信息*/
    setInfo(info) {
      let self = this;
      self.msg.pop();
      self.msg.push(info);
    },
    submit() {
      /* let data={
        username :this.user.phone,
        password :this.user.password
      } */
      /* Ajax.getLogin().then(res=>{
        console.log(res)
      }) */
      this.axios
        .post("/wpuser/login/", {
            username: 'bensom1989',
            password: '123QWEasd@'
        })
        .then(result => {
          console.log(res)
        })
        .catch(error => {
          this.setInfo(error);
        });

      /* this.axios
        .post("/users/login/?json", this.user)
        .then(result => {
          if (result.data.status == "ok") {
            this.$store.commit("setToken", `JWT ${result.data.token}`);
            this.$store.commit("setUserName", result.data.phone);
            this.$store.commit("setPortrait", this.api + result.data.portrait);
            $().message("Login success");
            this.$router.push("/user_center");
          } else {
            this.setInfo(result.data.msg);
          }
        })
        .catch(error => {
          this.setInfo(error);
        }); */
    } /* ,
    test_phone() {
      if (!/[0-9]+/.test(this.user.phone)) {
        this.setInfo("Please enter your correct phone number!");
      }
    } */
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f4f5f9");
  }
};
</script>

<style scoped>
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

.form-control {
  margin-top: 15px;
}
.form-control {
  height: 42px;
}
.row a {
  color: gray;
}

#submit {
  width: 100%;
  margin-top: 15px;
  height: 42px;
}

form {
  position: absolute;
  bottom: 50%;
  transform: translateY(45%);
  width: 100%;
}

input + input {
  margin-top: 15px;
}

input::-webkit-input-placeholder {
  color: #ccc;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #ccc;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #ccc;
}

input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #ccc;
}
</style>
