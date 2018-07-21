<template>
  <div class="container">
    {{msg}}
    <foote-menu></foote-menu>
  </div>
</template>

<script>
import footeMenu from './footeMenu'
export default {
  name: 'create',
  components: {
    footeMenu
  },
  mounted: function () {
    document.querySelector('body').setAttribute('style', 'background-color:#fff')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
