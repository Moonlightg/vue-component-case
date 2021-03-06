import Case from './Case'
import baselineRoutes from './baseline/routers'
import starRoutes from './star/routers'
import cartRoutes from './cart/routers'
import elemeRoutes from './eleme/routers'
import xueleleRoutes from './xuelele/routers'
import arcprogressRoutes from './arcprogress/routers'

const children = [
  {
    path: '/case',
    name: 'Case',
    component: Case
  },
  ...baselineRoutes.children,
  ...starRoutes.children,
  ...cartRoutes.children,
  ...elemeRoutes.children,
  ...xueleleRoutes.children,
  ...arcprogressRoutes.children
]

const roots = [
  ...baselineRoutes.roots,
  ...starRoutes.roots,
  ...cartRoutes.roots,
  ...elemeRoutes.roots,
  ...xueleleRoutes.roots,
  ...arcprogressRoutes.roots
]

export default {
  children,
  roots
}
