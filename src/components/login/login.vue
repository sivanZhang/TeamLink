<template>
<div>
    <div class="container"><back></back></div>
    <form class="container">
        <div class="text-center title">
            <div>Welcome</div>
            <div class="line"></div>
            <!-- <img class="logo" src="../../assets/logo.jpg" alt=""> -->
        </div>
        <input class="form-control" v-model="user.phone" type="number" name="phone_number" placeholder="Phone">
        <input class="form-control" v-model="user.password" type="password" name="phone_number" placeholder="Password">
        <button id="submit" @click="submit" type="button" class="black-btn common-btn">Log in</button>
        <div class="row">
            <router-link to="/signup" class="col-xs-6 text-left">Create an account</router-link>
            <router-link to="/forgot" class="col-xs-6 text-right">Forgot?</router-link>
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
      user: {
        phone: null,
        password: null
      }
    };
  },
  methods: {
    submit() {
          let userMsg= JSON.stringify(this.user)
          console.log(userMsg)
        this.$ajax.post("http://47.95.239.228:9000/users/login/?json",userMsg)
        .then(result => {
            console.log(result);
          })
          .catch(result => {
            console.log("error");
          })
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
