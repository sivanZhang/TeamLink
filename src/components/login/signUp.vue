<template>
<div>
    <div class="container">
        <back></back>
    </div>
    <form class="container">
        <div class="text-center">
            <img class="logo" src="../../assets/logo.jpg" alt="">
        </div>
        <input class="form-control" v-model="user.phone" type="text" autocomplete='tel-national' placeholder="Phone">
        <div class="relative">
            <input class="form-control" type="text" v-model="user.phonecode" @blur="test_phone" name="verification" placeholder="Verification code">
            <button id="send_code" @click='send_code' type="button">send</button>
        </div>
        <input class="form-control" type="password" v-model="user.password" autocomplete='tel-national' placeholder="Password">
        <button id="submit" type="button" @click='submit' class="black-btn common-btn">Create an account</button>
        <p class="text-center">
            By signing up you acknowledge that you have read and agree to the
            <a class="cx-textLink cx-textLink--brand" href="/legal/terms-of-service" target="_blank" data-tn="registerForm-link-termsOfService">Terms of Service</a> and
            <a class="cx-textLink cx-textLink--brand" href="/legal/privacy-policy" target="_blank" data-tn="registerForm-link-privacyPolicy">Privacy Policy</a>.
        </p>
        <p class="text-center">
            Have an account?
            <router-link to="/login" class="blue-link">Sign in</router-link>
        </p>
    </form>
</div>
</template>

<script>
$('p.text-center').css('color','red');
import back from '../back'
export default {
    components: {
        back
    },
    data() {
        return {
            user:{
                phone:'',
                password:'',
                phonecode:''
            }
        }
    },
    mounted: function () {
        document.querySelector('body').setAttribute('style', 'background-color:#f4f5f9')
    },
    methods: {
        submit:function() {
            this.$ajax.post('http://47.95.239.228:9000/users/register/?json',this.$qs.stringify(this.user))
                .then(result => {
                    console.log(result)
                })
                .catch(res => {
                    console.log('error')
                });
        },
        test_phone() {/* 验证码是否正确 */
            this.$ajax.get('http://47.95.239.228:9000/users/phonecode/'+this.user.phone+'/'+this.user.phonecode+'?json')
                .then(result => {
                    console.log(result)
                })
                .catch(res => {
                    console.log('error')
                });
        },
        send_code(){/* 发送验证码 */
            this.$ajax.get('http://47.95.239.228:9000/users/phonecode/'+this.user.phone+'?json&codetype=0')
                .then(result => {
                    console.log(result)
                })
                .catch(res => {
                    console.log('error')
                });
        }
       
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
    margin-bottom: 15px;
}

form {
    position: absolute;
    bottom: 50%;
    transform: translateY(45%);
    width: 100%;
}

p+p {
    padding-top: 15px;
    margin-top: 15px;
    border-top: 1px solid rgba(48, 51, 57, 0.15);
}

.logo {
    width: 40%;
    margin: 15px auto;
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
