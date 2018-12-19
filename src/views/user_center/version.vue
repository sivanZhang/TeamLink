<template>
<div class="text-center container">
    <mt-header class="row header">
            <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
            <mt-button @touchstart.native="$router.push(`/home`)" slot="right">home</mt-button>
    </mt-header>
    <h3>V1.0.0</h3> 
    <br/>
    <br/> 
    <label style="color:gray">©2018 TeamLink</label>
</div>
</template>
to be expected
<script>
export default {
    data(){
    return{
      title:'version'
    }
    },
    components: {
  },
  mounteds() {
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
