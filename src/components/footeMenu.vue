<template>
  <ul class="row">
    <li class="col-xs-4"
    v-for="(item, index) in nav"
    @click="routerLink(index, item.path)"
    :key="index" v-html="item.icon"
     :class="navindex == index ? 'active' : ''">
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { icon: '<i class="fa fa-search" aria-hidden="true"></i>', path: "/" },
        {
          icon: '<i class="fa fa-bandcamp" aria-hidden="true"></i>',
          path: "/workspace"
        },
        {
          icon: '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>',
          path: "/user-center"
        }
      ]
    };
  },
  props:['navindex'],
  methods: {
    routerLink(index, path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
ul {
  background-color: #000; /* #24292e; */
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  color: gray;
}
.active {
  color: #fff;
}
</style>
