<template>
<div>
    <div class="container"><back></back></div>
    <form class="container">
        <div class="text-center title">
          Reset your password
          </div>
        <input v-model.lazy="user.phone" @blur="test_phone" class="form-control" type="number" placeholder="Phone">
        <div class="relative">
            <input v-model.lazy="user.phonecode" @blur="test_phonecode" class="form-control" type="text" name="verification" placeholder="Verification code">
            <button @click="send_code" id="send_code" type="button">send</button>
        </div>
        <input v-model.lazy="user.password" class="form-control" type="password" name="phone_number" placeholder="New password">
        <button  @click='submit' :disabled="isDisabled" id="submit" type="button" class="black-btn common-btn">Resetting</button>
        <p class="text-center">
            After successful reset to
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
      return !/^1[3|4|5|8][0-9]\d{8}$/.test(this.user.phone);
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
        this.$ajax
          .post(
            "http://47.95.239.228:9000/users/find_password?json",
            this.$qs.stringify(this.user)
          )
          .then(result => {
            console.log(result);
            this.setInfo(result.data.msg);
          })
          .catch(result => {
            this.setInfo("Server is down!");
          });
      }
    },
    test_phonecode() {
      /* 验证码是否正确 */
      if (!/^\d{4}$/.test(this.user.phonecode)) {
        this.setInfo("Please enter a four-digit verification code!");
      } else {
        this.$ajax
          .get(
            "http://47.95.239.228:9000/users/phonecode/" +
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
          .catch(result => {
            this.setInfo("Server is down and verification failure!");
          });
      }
    },
    send_code() {
      /* 发送验证码 */
      if (this.regtestPhone) {
        this.setInfo("Please fill in the correct phone number first!");
      } else {
        this.$ajax
          .get(
            "http://47.95.239.228:9000/users/phonecode/" +
              this.user.phone +
              "?json&codetype=1"
          )
          .then(result => {
            this.setInfo(result.data.msg);
          })
          .catch(result => {
            this.setInfo("Server is down and send failure!");
          });
      }
    },
    test_phone() {
      if (this.regtestPhone) {
        this.setInfo("Please enter your correct phone number");
      }
    }
  },
  mounted: function() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f4f5f9");
  }
};
</script>

<style scoped>
.row {
  margin-top: 15px;
}
.row a {
  color: gray;
}
#submit {
  width: 100%;
  margin-top: 15px;
}
form {
  position: absolute;
  bottom: 50%;
  transform: translateY(45%);
  width: 100%;
}
p {
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid rgba(48, 51, 57, 0.15);
}
.title {
  font-size: 22px;
  margin-bottom: 30px;
  font-family:sans-serif;
}

form input.form-control {
  border-color: #e1e4e8;
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
  top: 6px;
  border: 0px;
  background-color: transparent;
  color: #337ab7;
}

#send_code:focus {
  border: 0px;
  outline: 0px;
}
</style>
