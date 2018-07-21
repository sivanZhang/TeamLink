<template>
<div class="container">
    <back></back>
    <form>
        <div class="text-center"><img class="logo" src="../../assets/logo.jpg" alt=""></div>
        <input class="form-control" @blur="sure" type="number" name="phone_number" placeholder="Phone">
        <div class="relative">
            <input class="form-control" @blur="sure" type="password" name="verification" placeholder="Verification code">
            <button id="send_code" type="button">send</button>
        </div>
        <input class="form-control" @blur="sure" type="password" name="phone_number" placeholder="Password">
        <input class="form-control" @blur="sure" type="password" name="phone_number" placeholder="Password">
        <button id="submit" type="submit" class="btn">Resetting</button>
        <p class="text-center">
            After successful reset to
            <router-link to="/login">Sign in</router-link>
        </p>
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
        document.querySelector('body').setAttribute('style', 'background-color:#f4f5f9');
    }
}
</script>

<style scoped>
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

p {
    padding-top: 15px;
    margin-top: 15px;
    border-top: 1px solid rgba(48, 51, 57, 0.15);
}

.logo {
    width: 40%;
    margin: 15px auto;
}

form input.form-control {
    border-color: #e1e4e8;
}

input {
    margin-bottom: 15px;
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

#send_code {
    position: absolute;
    right: 6px;
    top: 6px;
    border: 0px;
    background-color: transparent;
    color: #337ab7;
}

#send_code:focus {
    border: 0px;
    outline: 0px;
}

.form-control,
.btn {
    border-radius: 3px;
}
</style>
