import Orderindex from './index'
import Orderlist from './list'
import ActionSheet from '../../ActionSheet'

const children = [
]
const roots = [
  {
    path: '/ui/order',
    name: 'Orderindex',
    component: Orderindex
  },
  {
    path: '/ui/list',
    name: 'Orderlist',
    components: {
      default: Orderlist,
      ActionSheet: ActionSheet
    }
  }
]

export default {
  children,
  roots
}
