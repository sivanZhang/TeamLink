<template>
<div class="container text-center">
    <div class="title">More</div>
    <ul class="text-left row links">
        <li>
            <router-link to="/login">Sign in<i class="fa fa-pull-right fa-angle-right" aria-hidden="true"></i></router-link>
        </li>
        <li>Settings<i class="fa fa-pull-right fa-angle-right" aria-hidden="true"></i></li>
        <li>Help<i class="fa fa-pull-right fa-angle-right" aria-hidden="true"></i></li>
        <li>Sign out<i class="fa fa-pull-right fa-angle-right" aria-hidden="true"></i></li>
    </ul>
    <foote-menu></foote-menu>
</div>
</template>

<script>
export default {
  mounted: function () {
    document.querySelector('body').setAttribute('style', 'background-color:#fff')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    padding: 15px 0;
}

ul.links {
    background-color: #fff;
    padding: 0px 15px;
    border-top: 1px solid #e1e4e8;
    border-bottom: 1px solid #e1e4e8;
}

li+li {
    border-top: 1px solid #e1e4e8;
}
.logo{
  width: 40%;
  padding-bottom: 9px;
  margin: 0 auto;
}
.title{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
}
</style>
