<template>
<div class="text-center container">
    <mt-header class="row header">
            <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
            <mt-button @touchstart.native="$router.push(`/home`)" slot="right">home</mt-button>
    </mt-header>
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
  mounteds() {
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
