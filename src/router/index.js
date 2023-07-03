import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import cityView from '../views/city/cityView.vue'
import detailView from '../views/detail/detailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/city',
    name: 'city',
    component: cityView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: detailView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
