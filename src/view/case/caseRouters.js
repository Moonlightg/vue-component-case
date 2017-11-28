import Case from './Case'
import baselineRoutes from './baseline/routers'
import starRoutes from './star/routers'
import cartRoutes from './cart/routers'
import elemeRoutes from './eleme/routers'

const children = [
  {
    path: '/case',
    name: 'Case',
    component: Case
  },
  ...baselineRoutes.children,
  ...starRoutes.children,
  ...cartRoutes.children,
  ...elemeRoutes.children
]

const roots = [
  ...baselineRoutes.roots,
  ...starRoutes.roots,
  ...cartRoutes.roots,
  ...elemeRoutes.roots
]

export default {
  children,
  roots
}
