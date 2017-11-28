import ElemeRatings from './ratings/ratings'
import ElemeSeller from './seller/seller'

const children = [
  {
    path: '/case/eleme/ratings',
    name: 'ElemeRatings',
    component: ElemeRatings
  },
  {
    path: '/case/eleme/seller',
    name: 'ElemeSeller',
    component: ElemeSeller
  }
]
const roots = [
]

export default {
  children,
  roots
}
