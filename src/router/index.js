import Vue from "vue";
import VueRouter from 'vue-router';
    
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/Signup.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../components/ForgotPassword.vue')
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import('../components/Profile.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/Dashboard.vue'),
      children: [{
        path: ('/components/botones/'),
        component: () => import('../components/botones/isLogIn.vue'),
      }]
    },

  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router