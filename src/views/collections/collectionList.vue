<template>
  <div class="container">
    <header>Collection</header>
    <section
      v-for="(item,index) in dataList"
      :key="index"
      class="collections-item"
      @click="target(item[0].propertyId)"
    >
      <div class="item-img">
        <div class="img_warp">
          <img :src="item[0].images[0]" alt>
        </div>
        <div class="img_warp">
          <img :src="item[0].images[1]" alt>
        </div>
      </div>
      <div class="item-footer">
        <!-- <i class="fa fa-pencil-square-o" aria-hidden="true"></i> -->
        <div class="flex">
          <div>{{item[0].title}}</div>
          <!-- <i class="fa fa-external-link" aria-hidden="true"></i> -->
        </div>
      </div>
    </section>
    <img @click="openPrompt" class="icon-add" src="../../assets/icons/add.svg" alt>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import Ajax from "@/api/collections";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      title: "Collections",
      dataList: []
    };
  },
  methods: {
    target(pid) {
      this.$router.push({
        name: `benaa`,
        params: { pid }
      });
    },
    openPrompt() {
      MessageBox({
        title: "Create a New Collection succeed",
        message: `Name this new collection`,
        showCancelButton: true,
        confirmButtonText: "Create",
        cancelButtonText: "cancel",
        showInput: true
      });
    } /* ,
    getHtml(val) {
      this.$store.commit("setUrl", val);
      this.$router.push("/iframe");
    } */
  },
  created() {
    Ajax.getCollections()
      .then(res => {
        this.dataList = res.data.msg;
      })
      .catch(err => {});
  },
  mounted() {
    document.title = "TeamLink " + this.title;
  }
};
</script>

<style lang="less" scoped>
.mint-msgbox {
  border-radius: 8px !important;
}
header {
  font-size: 18px;
  height: 50px;
  line-height: 50px;
}
.collections-item {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);
  width: 100%;
  .item-img {
    display: flex;
    width: 100%;
    justify-content: center;
    & > div {
      width: 50%;
      height: 172px;
      overflow: hidden;
      img {
        height: 100%;
        width: auto;
        
      }
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
