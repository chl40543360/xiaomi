import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'

Vue.use(Router)

export default new Router({

  mode: 'history',

  // base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => import('./views/sort/Sort.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/cart/Cart.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user/User.vue'),
      children: [
        {
          path: 'member',
          name: 'member',
          component: () => import('./views/user/components/Member.vue')
        },
        {
          path: 'serve',
          name: 'serve',
          component: () => import('./views/user/components/Serve.vue')
        },
        {
          path: 'mihome',
          name: 'mihome',
          component: () => import('./views/user/components/MiHome.vue')
        },
        {
          path: 'fma',
          name: 'fma',
          component: () => import('./views/user/components/Fma.vue')
        }
      ]
    },

    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search/Search.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/detail/Detail.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/Login.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/order/Order.vue')
    },
    {
      path: '/clear',
      name: 'clear',
      component: () => import('./views/clear/Clear.vue')
    },
    {
      path: '/set',
      name: 'set',
      component: () => import('./views/set/Set.vue')
    }
  ]
})
