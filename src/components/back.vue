<template>
<div class="text-left back">
    <span @click="go_back"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
    <input type="text" slot="inp">
</div>
</template>

<script>
export default {
    methods: {
        go_back() {
            this.$router.go(-1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.back {
    padding: 0 15px;
    box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.18);
    line-height: 30px;
    color: grey;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        flex: 0 0 0;
        font-size: 16px;
    }
    input{
        display: block;
        width: 100%;
        height: 100%;
        border:none;
        outline: none;
        margin-left: 60px;
    }
}

</style>
