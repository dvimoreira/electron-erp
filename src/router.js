import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import RouteAuth from './routes/auth'
import RouteDashboard from './routes/dashboard'

Vue.use(Router)

let arrayRoutes = [
  ...RouteAuth,
  ...RouteDashboard
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: arrayRoutes
})

/**
 * Devemos checar aqui se o usuário vai ter acesso a determinada rota
 * caso contrário devemos mandar ele de volta ao dashboard ou ao
 * login caso não tiver logado
 */

router.beforeEach((to, from, next) => {
  if (!store.state.authenticated && to.meta.auth) {
    router.push({
      name: 'auth.login'
    })
  }

  next()
})

export default router
