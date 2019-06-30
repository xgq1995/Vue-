import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import New from './views/New.vue'
import Server from './views/Server.vue'
import Account from './views/Account.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/New.vue')
    },
    {
        path: '/server',
        name: 'server',
        component: Server
      },
      {
        path: '/account',
        name: 'account',
        component: Account
      },
  ]
})
