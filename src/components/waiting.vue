<template>
<div class="text-center container">
    <back></back>
    <h3>Please look forward to ...</h3>
</div>
</template>

<script>
import back from "./back";
export default {
    components: {
    back
  },
  mounted: function() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f4f5f9");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin-top:50%;
}
</style>
