export default [
  {
    path: '/painel',
    component: () => import(/* webpackChunkName: "autenticated" */ './../layouts/Authenticated.vue'),
    meta: { auth: true },
    children: [
      {
        path: 'dashboard',
        name: 'painel.dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ './../views/dashboard/Dashboard.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'provider',
        name: 'painel.provider',
        component: () => import(/* webpackChunkName: "provider" */ './../views/provider/Provider.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'stock',
        name: 'painel.stock',
        component: () => import(/* webpackChunkName: "stock" */ './../views/stock/Stock.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'orders',
        name: 'painel.orders',
        component: () => import(/* webpackChunkName: "orders" */ './../views/orders/Orders.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'users',
        name: 'painel.users',
        component: () => import(/* webpackChunkName: "users" */ './../views/users/Users.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'config',
        name: 'painel.config',
        component: () => import(/* webpackChunkName: "config" */ './../views/config/Config.vue'),
        meta: {
          auth: true
        }
      }
    ]
  }
]
