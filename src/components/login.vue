<template>
    <div>
        <div class="login-wrap" v-show="showLogin">
            <h3>登录</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="number" placeholder="请输入用户名" v-model="phone">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button v-on:click="login">登录</button>
            <span v-on:click="ToRegister">没有账号？马上注册</span>
        </div>

        <div class="register-wrap" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="number" placeholder="请输入用户名" v-model="newPhone">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button v-on:click="register">注册</button>
            <span v-on:click="ToLogin">已有账号？马上登录</span>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
    .login-wrap{text-align:center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
</style>

<script>
export default{
  data () {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      phone: '',
      password: '',
      newUsername: '',
      newPassword: ''
    }
  },
  methods: {
    login () {
      var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.phone === '') {
        alert('请输入手机号');
      } else if(!reg.test(this.phone)) {
        alert('手机格式不正确')
      } else if (this.password === '') {
        alert('请输入密码');
      } else {
        this.$router.push({path: '/he' , query: {showLogin: true , showRegister: false}})
      }
    },
    ToRegister () {
    this.showRegister = true
    this.showLogin = false
},
    ToLogin () {
    this.showRegister = false
    this.showLogin = true
},
register(){
    var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.newPhone === '') {
        alert('请输入手机号');
      } else if(!reg.test(this.newPhone)) {
        alert('手机格式不正确')
      } else if (this.newPassword === '') {
        alert('请输入密码');
      } else {
        this.$router.push({path: '/he' , query: {showLogin: false , showRegister: true}})
      }
}
  }
}
</script>
