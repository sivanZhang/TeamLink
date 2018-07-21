<template>
<div class="text-left back">
    <span @click="go_back"><i class="fa fa-angle-left" aria-hidden="true"></i> Back</span>
    <a class="pull-right" href="/">Home</a>
</div>
</template>

<script>
export default {
    methods: {
        go_back() {
            window.history.go(-1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
    padding-top: 15px;
    color: #a9afb6;
}

a {
    color: inherit;
}
</style>
