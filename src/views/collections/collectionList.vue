<template>
  <div class="container">
    <header>Collection</header>
    <section
      class="collections-item"
      @touchstart="getHtml(`http://www.demo-it.com.au/teamlink1/open-houses/ `)"
    >
      <div class="item-img">
        <img ref="item_img" src="../../assets/icons/c1.png" alt>
        <img ref="item_img" src="../../assets/icons/c1.png" alt>
      </div>
      <div class="item-footer">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <div class="flex">
          <div>A</div>
          <i class="fa fa-external-link" aria-hidden="true"></i>
        </div>
      </div>
    </section>
    <section
      class="collections-item"
      @touchstart="getHtml(`http://www.demo-it.com.au/teamlink1/open-houses/ `)"
    >
      <div class="item-img">
        <img ref="item_img" src="../../assets/icons/c1.png" alt>
        <img ref="item_img" src="../../assets/icons/c1.png" alt>
      </div>
      <div class="item-footer">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <div class="flex">
          <div>B</div>
          <i class="fa fa-external-link" aria-hidden="true"></i>
        </div>
      </div>
    </section>
    <section
      class="collections-item"
      @touchstart="getHtml(`http://www.demo-it.com.au/teamlink1/open-houses/ `)"
    >
      <div class="item-img">
        <img ref="item_img" src="../../assets/icons/c1.png" alt>
        <img ref="item_img" src="../../assets/icons/c1.png" alt>
      </div>
      <div class="item-footer">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <div class="flex">
          <div>C</div>
          <i class="fa fa-external-link" aria-hidden="true"></i>
        </div>
      </div>
    </section>
    <img @touchstart="openPrompt" class="icon-add" src="../../assets/icons/add.svg" alt>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      title: "Collections"
    };
  },
  methods: {
    openPrompt() {
      MessageBox({
        title: "Create a New Collection succeed",
        message: `Name this new collection`,
        showCancelButton: true,
        confirmButtonText: "Create",
        cancelButtonText: "cancel",
        showInput: true
      });
    },
    getHtml(val) {
      this.$store.commit("setUrl", val);
      this.$router.push("/iframe");
    }
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
    document.title = "TeamLink " + this.title;
    /* 设置展图宽高相等 */
    let imgWidth = $(".item-img").width() / 2;
    $(".item-img>img").height(imgWidth);
  }
};
</script>

<style lang="less" scoped>
div /deep/ .mint-msgbox {
  border-radius: 8px !important;
}
header {
  font-size: 18px;
  height: 50px;
  line-height: 50px;
}
.collections-item {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);
  .item-img {
    display: flex;
    justify-content: center;
    img {
      flex: 1 1 auto;
    }
  }
  .item-footer {
    padding: 10px 15px;
    .flex {
      display: flex;
      justify-content: space-between;
    }
    .fa-pencil-square-o,
    .fa-external-link {
      color: rgb(197, 197, 197);
      vertical-align: middle;
    }
  }
}
.collections-item + .collections-item {
  margin-top: 30px;
}
.icon-add {
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-align: center;
  position: fixed;
  right: 15px;
  bottom: 65px;
  padding: 6px;
  box-shadow: 0 1px 6px 3px rgba(0, 0, 0, 0.16);
  background: #fff;
}
</style>
