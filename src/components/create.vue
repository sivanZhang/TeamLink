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
  data () {
    return {
      msg: 'this is component "create"'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
