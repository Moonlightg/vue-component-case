import Case from './Case'
import starRoutes from './star/routers'
import cartRoutes from './cart/routers'

const children = [
  {
    path: '/case',
    name: 'Case',
    component: Case
  },
  ...starRoutes.children,
  ...cartRoutes.children
]

const roots = [
  ...starRoutes.roots,
  ...cartRoutes.roots
]

export default {
  children,
  roots
}
