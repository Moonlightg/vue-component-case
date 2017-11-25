import Ui from './Ui'
import applyRoutes from './oa/apply/routers'
import orderRoutes from './order/routers'

const children = [
  {
    path: '/ui',
    name: 'Ui',
    component: Ui
  },
  ...applyRoutes.children,
  ...orderRoutes.children
]

const roots = [
  ...applyRoutes.roots,
  ...orderRoutes.roots
]

export default {
  children,
  roots
}
