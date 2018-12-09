<template>
  <div class="container"> 
     <mt-header title="Make an Enquiry" class="header row">
      <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
    <section>
      <h4>Name</h4>
      <input v-model="
            name" type="text">
    </section>
    <section>
      <h4>Phone</h4>
      <input v-model="phone" type="number">
    </section>
    <section>
      <h4>Email</h4>
      <input v-model="Email" type="text">
    </section>
    <section>
      <h4>Message</h4>
      <textarea v-model="content" name id cols="30" rows="10"></textarea>
    </section>
    <div class="container row">
      <button class="black-btn common-btn" @click="confirm">Submit</button>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      name: "",
      Email: "",
      content: "",
      phone:''
    };
  },
  methods: {
    confirm() {
      const REG = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (this.name == "" || this.Email == "" || this.content == ""||this.phone =="") {
        Toast({
          message: "The form cannot be empty",
          position: "bottom",
          duration: 3000
        });
        return;
      }
      debugger
      if (!REG.test(this.Email)) {
        Toast({
          message: "Mailbox format error",
          position: "bottom",
          duration: 3000
        });
        return;
      }
      Toast({
        message: "Success",
        position: "bottom",
        duration: 3000
      });
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
section {
  h4 {
    margin-bottom: 15px;
    color: #000;
  }
  input,
  textarea {
    width: 100%;
    border: 1px solid #c5c5c5;
    padding: 12px;
  }
  textarea {
    resize: none;
  }
  & + section {
    margin-top: 30px;
  }
  &:first-of-type {
    margin-top: 30px;
  }
}
.container.row {
  display: block;
  width: 100%;
  position: fixed;
  bottom: 0;
  button {
    width: 100%;
    height: 46px;
  }
}
</style>


