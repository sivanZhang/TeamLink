<template>
  <div class="search-bg">
    <div>
      <div><button></button>
        <button></button></div>
      <div><input type="text"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'search'
      }
    },
    mounted: function() {
      document.title = 'TeamLink ' + this.title;
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>