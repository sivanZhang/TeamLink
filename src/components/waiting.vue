<template>
<div class="text-center container">
    <back></back>
    <h3>To be expected ...</h3>
</div>
</template>
to be expected
<script>
import back from "./back";
export default {
    data(){
    return{
      title:'Waiting'
    }
    },
    components: {
    back
  },
  mounted: function() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f4f5f9");
      document.title='TeamLink-'+this.title;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: 50%;
}
</style>
