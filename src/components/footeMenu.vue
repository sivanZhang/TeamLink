<template>
  <ul class="row">
    <router-link
    v-for="(item, index) in nav"
    :to="item.path"
    :key="index" v-html="item.icon" tag='li'>
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          icon: `<i class="fa fa-search" aria-hidden="true"></i>
        <div>Explore</div>`,
          path: "/"
        },
        {
          icon: `<i class="fa fa-heart-o" aria-hidden="true"></i>
          <div>Collection</div>`,
          path: "/collections"
        },
        {
          icon: `<i class="fa fa-bandcamp" aria-hidden="true"></i>
           <div>Discover</div>`,
          path: "/discover"
        },
        {
          icon: `<i class="fa fa-commenting-o" aria-hidden="true"></i>
           <div>Inbox</div>`,
          path: "/workspace"
        },
        {
          icon: `<i class="fa fa-user-o" aria-hidden="true"></i>
          <div>Account</div>`,
          path: this.$store.state.token ? "/user-center" : "/login"
          //如果没有登录，则链接到登录页面
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0 2px;
  text-align: center;
  color: #333;
  border-top: 1px solid #ddd;
  font-size: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
li {
  flex: 1 1 auto;
}
.router-link-exact-active.router-link-active {
  color: rgb(255, 87, 34);
}
</style>
