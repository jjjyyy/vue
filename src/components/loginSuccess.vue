<template>
  <div class="hello" >
    <h1 v-show="showRegister">注册成功</h1>
    <h1 v-show="showLogin">登录成功</h1>
  </div>
  
</template>

<script>
export default {
  name: 'loginSuccess',
  data () {
    return {
      showRegister: this.$route.query.showRegister,
      showLogin: this.$route.query.showLogin,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
