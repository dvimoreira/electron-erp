export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "template-unauthenticated" */ './../layouts/Unauthenticated.vue'),
    meta: { auth: false },
    children: [
      {
        path: '',
        name: 'auth.setup',
        component: () => import(/* webpackChunkName: "setup" */ './../views/auth/Setup.vue'),
        meta: {
          auth: false
        }
      },
      {
        path: '/login',
        name: 'auth.login',
        component: () => import(/* webpackChunkName: "login" */ './../views/auth/Login.vue'),
        meta: {
          auth: false
        }
      }
    ]
  }
]
