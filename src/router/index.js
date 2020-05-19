import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { auth } from '../firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{requiresAuth : true}
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Inngreso" */ '../views/Ingreso.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from,next) => {
  const user= auth.currentUser
  
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(user){
      next()
    }else{
      next({name:'ingreso'})
    }
  }
})

export default router
