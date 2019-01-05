import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import loginSuccess from '@/components/loginSuccess'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/he',
      name: 'loginSucess',
      component: loginSuccess
    }
  ]
})
