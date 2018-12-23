<template>
  <ul class="row">
    <li v-for="(item, index) in nav"
    @touchend="$router.push(item.path)"
    :key="index" tag='li'>
		<img class="icons" :src="$route.path.indexOf(item.path)!=-1?item.src_act:item.src" alt="">
		<div>
			{{item.name}}
		</div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          src: require(`../assets/icons/explore.png`),
		  src_act: require(`../assets/icons/explore_act.png`),
          name: "Explore",
          path: "/home"
        },
        {
          src: require(`../assets/icons/collection.png`),
		  src_act: require(`../assets/icons/collection_act.png`),
          name: "Collection",
          path: "/collections"
        },
        {
          src: require(`../assets/icons/discover.svg`),
		  src_act: require(`../assets/icons/discover_act.svg`),
          name: "Discover",
          path: "/discover"
        },
        {
          src: require(`../assets/icons/inbox.png`),
		  src_act: require(`../assets/icons/inbox_act.png`),
          name: "Inbox",
          path: "/inbox"
        },
        {
          src: require(`../assets/icons/account.png`),
		  src_act: require(`../assets/icons/account_act.png`),
          name: "Account",
          path: "/user_center"
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
  padding: 6px 0 1px;
  text-align: center;
  color: #333;
  border-top: 1px solid #ddd;
  font-size: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 300;
}
li {
  width: 20%;
  font-size: 12px;
}
.icons{
	width: 22px;
	height: 22px;
}
/* .router-link-exact-active.router-link-active {
  color: rgb(255, 87, 34);
} */
</style>
