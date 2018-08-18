<template>
<div>
    <div class="container"><back></back></div>
    <form class="container">
        <div class="text-center title">
            <div>Sign in to TEAMLINK</div>
            <div class="line"></div>
            <!-- <img class="logo" src="../../assets/logo.jpg" alt=""> -->
        </div>
        <input v-model="user.phone"  @change="test_phone" class="form-control" type="number" id="phone_number" placeholder="Phone">
        <input v-model="user.password" class="form-control" type="password" name="phone_number" placeholder="Password">
        <button id="submit" @click="submit" type="button" class="black-btn common-btn" :disabled='isDisabled'>Log in</button>
        <div class="row">
            <router-link to="/signup" class="col-xs-6 blue-link text-left">Create an account</router-link>
            <router-link to="/forgot" class="col-xs-6 blue-link text-right">Forgot?</router-link>
        </div>
        <div v-show="msg.length" class="alert alert-warning alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            {{message}}
        </div>
    </form>
</div>
</template>

<script>
import {base_api} from '../../../static/js/api.js'
import back from "../back";
export default {
  components: {
    back
  },
  data() {
    return {
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
      this.axios
        .post("/users/login/?json", this.$qs.stringify(this.user))
        .then(result => {
          if (result.data.status == "ok") {
            this.$cookie.set("user-name", result.data.phone);
            this.$cookie.set("portrait",base_api+result.data.portrait);
            localStorage.setItem("token", "JWT" + " " + result.data.token);
            $().message("Login success");
           this.$router.push("/user-center");
          } else {
            this.setInfo(result.data.msg);
          }
        })
        .catch(error => {
          this.setInfo(error);
        });
    },
    test_phone() {
      if (!/[0-9]+/.test(this.user.phone)) {
        this.setInfo("Please enter your correct phone number!");
      }
    }
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

.form-control,
.row {
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

.logo {
  width: 40%;
  margin: 15px auto;
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
