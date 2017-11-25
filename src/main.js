// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import SubTitle from './SubTitle'
import ActionSheet from './ActionSheet'
import Star from './components/star/star'
import VueEvents from 'vue-events'
import {ActionSheetPlugin, ScmWavesPlugin} from './utils/plugins'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/styles/base.less'

import store from './store'

Vue.config.productionTip = false
// 全局过滤器
Vue.filter('money', function (value, type) {
  return '¥' + value.toFixed(2) + type
})

Vue.use(ElementUI)

Vue.use(VueResource)

Vue.use(VueEvents)

Vue.use(ScmWavesPlugin)

sync(store, router)

/* eslint-disable no-new */
Vue.component('page-header', PageHeader)

Vue.component('page-footer', PageFooter)

Vue.component('sub-title', SubTitle)

Vue.component('action-sheet', ActionSheet)
Vue.use(ActionSheetPlugin)

Vue.component('star', Star)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
