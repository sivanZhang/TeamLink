<template>
<div class="container">
    <back></back>
    <form>
        <div class="text-center title">
            <div>Welcome</div>
            <div class="line"></div>
            <!-- <img class="logo" src="../../assets/logo.jpg" alt=""> -->
        </div>
        <input class="form-control" @blur="sure" type="number" name="phone_number" placeholder="Phone">
        <input class="form-control" @blur="sure" type="password" name="phone_number" placeholder="Password">
        <button id="submit" type="submit" class="btn">Log in</button>
        <div class="row">
            <router-link to="/signup" class="col-xs-6 text-left">Create an account</router-link>
            <router-link to="/forgot" class="col-xs-6 text-right">Forgot?</router-link>
        </div>
    </form>
</div>
</template>

<script>
import back from '../back'
export default {
    components: {
    	back
    },
    data() {
        return {
            msg: 'this is component "user-center"'
        }
    },
    mounted: function () {
				document.querySelector('body').setAttribute('style', 'background-color:#f4f5f9')
  }
}
</script>

<style scoped>
.line {
    display: inline-block;
    width: 50px;
    border-bottom: 2px solid #333;
    transform: translateY(-36px);
}

.title {
    margin-bottom: 30px;
    font-size: 36px;
}

.form-control,
.btn {
    border-radius: 3px;
}

.row {
    margin-top: 15px;
}

.row a {
    color: gray;
}

#submit {
    width: 100%;
    margin-top: 15px;
    background-color: #000;
    color: #fff;
}

form {
    padding-top: 120px;
}

.logo {
    width: 40%;
    margin: 15px auto;
}

form input.form-control {
    border-color: #e1e4e8;
}

input+input {
    margin-top: 15px;
}

input::-webkit-input-placeholder {
    color: #ccc;
}

input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #ccc;
}

input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #ccc;
}

input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #ccc;
}
</style>
