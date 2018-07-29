<template>
<div class="container">
    <div class="title" @click="toChange">
        <div class="col1"><img class="user-img" src="../../assets/touxiang.jpg" alt=""></div>
        <div class="col2">Phone:{{phone_number}}</div>
        <div class="col3 text-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
        
    </div>
    <ul class="text-left row links">
        <li>Settings<i class="fa fa-pull-right fa-angle-right" aria-hidden="true"></i></li>
        <li ref="li" class="test">Help<i class="fa fa-pull-right fa-angle-right" aria-hidden="true"></i></li>
        <li @click="sign_out">Sign out<i class="fa fa-pull-right fa-angle-right" aria-hidden="true"></i></li>
    </ul>
    <foote-menu></foote-menu>
</div>
</template>

<script>
export default {
    data(){
        return{
            phone_number:this.$cookie.get('user-name')
        }
    },
  mounted: function () {
    document.querySelector('body').setAttribute('style', 'background-color:#fff');
  },
  methods:{
    sign_out(){
        this.$cookie.delete('user-name');
        this.$router.push("/login"); 
    },
    toChange(){
        this.$router.push('/change')
    }
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
.links a{
    display: inline-block;
    width: 100%;
}
li+li {
    border-top: 1px solid #e1e4e8;
}
.user-img{
    width: 60px;
    height: 60px;
    border-radius: 3px;
}
.title{
    padding: 10px 0;
    width: 100%;
    display: table;
}
.col1,.col2,.col3{
    display: table-cell;
}
.col1{
    vertical-align: middle;
    width: 75px;
}.col2{
    vertical-align: bottom;
}
.col3{
    vertical-align: middle;
}
</style>
