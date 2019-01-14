// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Carousel, CarouselItem, Icon, Page, Alert, Spin, BackTop} from 'iview'
import 'iview/dist/styles/iview.css'
import VueAMap from 'vue-amap'

Vue.component('Carousel', Carousel)
Vue.component('CarouselItem', CarouselItem)
Vue.component('Icon', Icon)
Vue.component('Page', Page)
Vue.component('Alert', Alert)
Vue.component('Spin', Spin)
Vue.component('BackTop', BackTop)

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'd5b50c05b6441fc8b4a6aae2ba31d77e',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
