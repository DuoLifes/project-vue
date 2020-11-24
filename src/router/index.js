import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/views/layout/layout.vue"
import Home from "@/views/home/home.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout/home'
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      redirect: '/layout/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        }
      ]
    }
  ]
})
