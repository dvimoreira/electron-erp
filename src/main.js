import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueTheMask from 'vue-the-mask'
import VueApexCharts from 'vue-apexcharts'

// Import and mounted components customns
import allComponents from './components'

Vue.config.productionTip = false

for (var item of allComponents) {
  Vue.component(item.name, item.component)
}

Vue.use(Buefy)
Vue.use(VueTheMask)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
