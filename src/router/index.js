import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'
import uiRoutes from '@/ui/uiRouters'
import Home from '@/components/home'
import Case from '@/components/Case'
import Two from '@/components/two'
import Cart from '@/components/Cart'
import CaseStar from '@/components/CaseStar'

// 用于记录路由的前进后退状态
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

let routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/casestar',
    name: 'CaseStar',
    component: CaseStar
  },
  {
    path: '/',
    component: PageTransition,
    children: [
      {path: '', name: 'Home', component: Home},
      {path: 'case', name: 'Case', component: Case},
      {path: 'two', name: 'Two', component: Two},
      ...uiRoutes.children
    ]
  },
  ...uiRoutes.roots
]

export default new Router({
  routes
})
