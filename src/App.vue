<template>
<div id="app">
    <router-view/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
    margin: 0px !important;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
}

ul {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
}

input:focus,
.form-control:focus {
    outline: none;
    box-shadow: unset;
}

/**
 *  修改google浏览器，默认的聚焦黄色背景为白色
 */

input:-webkit-autofill,
select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
}

.relative {
    position: relative;
}

.form-control {
    box-shadow: unset;
}
</style>
