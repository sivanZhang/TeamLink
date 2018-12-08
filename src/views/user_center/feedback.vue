<template>
    <div class="container">
        <mt-header title="Feedback" class="row">
            <router-link to="/user_center" slot="left">
                 <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <section>
            <h4>Name</h4>
            <input type="text">
        </section>
        <section>
            <h4>Email</h4>
            <input type="email">
        </section>
        <section>
            <h4>Feedback</h4>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </section>
        <div class="container row">
            <button class="black-btn common-btn">
            Send
            </button>
        </div>
    </div>
</template>
<script>
export default {};
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


