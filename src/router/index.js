import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'
import uiRoutes from '@/ui/uiRouters'
import caseRoutes from '@/view/case/caseRouters'
import Home from '@/components/home'
import Two from '@/components/two'

// 用于记录路由的前进后退状态
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: PageTransition,
    children: [
      {path: '', name: 'Home', component: Home},
      {path: 'two', name: 'Two', component: Two},
      ...uiRoutes.children,
      ...caseRoutes.children
    ]
  },
  ...uiRoutes.roots,
  ...caseRoutes.roots
]

export default new Router({
  routes
})
