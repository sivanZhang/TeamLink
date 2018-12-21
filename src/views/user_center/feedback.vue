<template>
  <div class="container main">
    <van-nav-bar title="Feedback" left-arrow @click-left="$router.go(-1)" fixed/>
    <section>
      <h4>Name</h4>
      <input v-model="
            name" type="text">
    </section>
    <section>
      <h4>Email</h4>
      <input v-model="Email" type="text">
    </section>
    <section>
      <h4>Feedback</h4>
      <textarea v-model="content" name id cols="30" rows="10"></textarea>
    </section>
    <div class="container row">
      <button class="black-btn common-btn" @click="confirm">Send</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      Email: "",
      content: ""
    };
  },
  methods: {
    confirm() {
      const REG = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (this.name == "" || this.Email == "" || this.content == "") {
        this.$toast({
          message: "The form cannot be empty",
        });
        return;
      }
      if (!REG.test(this.Email)) {
        this.$toast({
          message: "Mailbox format error",
        });
        return;
      }
      this.$toast({
        message: "Success",
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


