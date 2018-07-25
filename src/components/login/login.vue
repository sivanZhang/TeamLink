<template>
<div>
    <div class="container"><back></back></div>
    <form class="container">
        <div class="text-center title">
            <div>Welcome</div>
            <div class="line"></div>
            <!-- <img class="logo" src="../../assets/logo.jpg" alt=""> -->
        </div>
        <input class="form-control" v-model.lazy="user.phone" @blur="test_phone" type="number" name="phone_number" placeholder="Phone">
        <input class="form-control" v-model.lazy="user.password" type="password" name="phone_number" placeholder="Password">
        <button id="submit" @click="submit" type="button" class="black-btn common-btn">Log in</button>
        <div class="row">
            <router-link to="/signup" class="col-xs-6 text-left">Create an account</router-link>
            <router-link to="/forgot" class="col-xs-6 text-right">Forgot?</router-link>
        </div>
        <div v-if="msg.length" class="alert alert-warning alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Warning!</strong> {{message}}
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
        password: null
      }
    };
  },
  computed: {
    removeMsg: function() {
      this.msg.pop();
    },
    message: function() {
      return this.msg.toString();
    }
  },
  methods: {
    submit() {
      if (!this.user.phone || !this.user.password) {
        this.removeMsg; /* 调用计算属性 */
        this.msg.push("phone and password required.");
      } else {
        this.$ajax
          .post(
            "http://47.95.239.228:9000/users/login/?json",
            this.$qs.stringify(this.user)
          )
          .then(result => {
            this.removeMsg;
            this.msg.push(result.data.msg);
          })
          .catch(result => {
            this.removeMsg;
            this.msg.push("error!");
          });
      }
    },
    test_phone() {
      if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.user.phone)) {
        this.msg.pop();
        this.msg.push("请输入正确的手机号");
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
.line {
  display: inline-block;
  width: 50px;
  border-bottom: 2px solid #333;
  transform: translateY(-36px);
}

.title {
  font-size: 36px;
}

.form-control,
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
