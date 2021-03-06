<template>
  <div class="main">
    <van-nav-bar title="Sign Up" left-arrow @click-left="$router.go(-1)" fixed />
    <form class="container">
      <div class="text-center title">
        Create your personal account
      </div>
      <input v-model="user.phone" @blur="test_phone" class="form-control" type="number" autocomplete='tel-national' placeholder="Phone">
      <div class="relative">
        <input v-model="user.phonecode" @blur="test_phonecode" class="form-control" type="text" name="verification" placeholder="Verification code">
        <button id="send_code" @touchend='send_code' type="button">send</button>
      </div>
      <input v-model="user.password" class="form-control" type="password" autocomplete='tel-national' placeholder="Password">
      <button id="submit" @touchend='submit' :disabled="isDisabled" type="button" class="black-btn common-btn">Create an account</button>
      <p class="text-center">
        By signing up you acknowledge that you have read and agree to the
        <a class="cx-textLink cx-textLink--brand" href="/legal/terms-of-service" target="_blank" data-tn="registerForm-link-termsOfService">Terms of Service</a> and
        <a class="cx-textLink cx-textLink--brand" href="/legal/privacy-policy" target="_blank" data-tn="registerForm-link-privacyPolicy">Privacy Policy</a>.
      </p>
      <p class="text-center">
        Have an account?
        <router-link to="/login" class="blue-link">Sign in</router-link>
      </p>
      <div v-if="msg.length" class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {{message}}
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: [],
        user: {
          phone: null,
          password: null,
          phonecode: null
        }
      };
    },
    computed: {
      message: function() {
        return this.msg.toString();
      },
      isDisabled() {
        if (!this.user.phone || !this.user.password || !this.user.phonecode) {
          return true;
        } else {
          return false;
        }
      },
      regtestPhone() {
        return !/[0-9]+/.test(this.user.phone);
      }
    },
    methods: {
      setInfo(info) {
        this.msg.pop();
        this.msg.push(info);
      },
      submit() {
        if (this.regtestPhone) {
          this.setInfo("Please enter your correct phone number");
        } else {
          this.axios
            .post(
              "/users/register/?json",
              this.user
            )
            .then(result => {
              this.setInfo(result.data.msg);
            })
            .catch(error => {
              this.setInfo(error);
            });
        }
      },
      test_phonecode() {
        /* 验证码是否正确 */
        if (!/^\d{4}$/.test(this.user.phonecode)) {
          this.setInfo("Please enter a four-digit verification code!");
        } else {
          this.axios
            .get(
              "/users/phonecode/" +
              this.user.phone +
              "/" +
              this.user.phonecode +
              "?json"
            )
            .then(result => {
              if (result.data.status == "ok") {
                return;
              } else {
                this.setInfo(result.data.msg);
              }
            })
            .catch(error => {
              this.setInfo(error);
            });
        }
      },
      send_code() {
        /* 发送验证码 */
        if (this.regtestPhone) {
          this.setInfo("Please fill in the correct phone number first!");
        } else {
          this.axios
            .get(
              "/users/phonecode/" +
              this.user.phone +
              "?json&codetype=0"
            )
            .then(result => {
              this.setInfo(result.data.msg);
            })
            .catch(error => {
              this.setInfo(error);
            });
        }
      },
      test_phone() {
        if (this.regtestPhone) {
          this.setInfo("Please enter your correct phone number");
        }
      }
    }
  };
</script>

<style scoped>
  .row a {
    color: gray;
  }

  #submit {
    width: 100%;
    margin-bottom: 15px;
    height: 42px;
  }

  form {
    position: absolute;
    bottom: 50%;
    transform: translateY(45%);
    width: 100%;
  }

  p+p {
    padding-top: 15px;
    margin-top: 15px;
    border-top: 1px solid rgba(48, 51, 57, 0.15);
  }

  input {
    margin-bottom: 15px;
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

  #send_code {
    position: absolute;
    right: 6px;
    top: 10px;
    border: 0px;
    background-color: transparent;
    color: #337ab7;
  }

  #send_code:focus {
    border: 0px;
    outline: 0px;
  }

  .form-control {
    height: 42px;
  }

  .form-control,
  .btn {
    border-radius: 3px;
  }

  .title {
    font-size: 22px;
    margin-bottom: 30px;
    font-family: sans-serif;
  }
</style>