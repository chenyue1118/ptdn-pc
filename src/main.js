import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/reset.less' // A modern alternative to CSS resets
import '@/assets/styles/transition.less'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/icons' // icon

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import PageTitle from '@/components/PageTitle.vue'
import Dtable from '@/components/Dtable.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('PageTitle', PageTitle)
Vue.component('Dtable', Dtable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
