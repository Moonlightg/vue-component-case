<template>
  <div>
    <div class="ele-box ele-goods">
      <!-- 左侧菜单 -->
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
            <span class="text border-1px">
              <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>{{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <!-- 右侧商品 -->
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="item in goods" ref="foodList">
            <h1 class="title">{{item.name}}</h1>

            <ul>
              <li @click="selectFood(food,$event)" v-for="food in item.foods" class="food-item border-1px">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="ele-content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">
                      ￥{{food.oldPrice}}
                    </span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <ele-cart-control @add="addFood" :food="food"></ele-cart-control>
                  </div>
                </div>
              </li>
            </ul>
            
          </li>
        </ul>
      </div>
      <!-- 购物车 -->
      <!-- deliverPrice:商家配送费,minPrice:起送费 通过props中的seller来传递,路由容器中也要定义：seller="seller",ref="elecart"-->
      <ele-cart ref="elecart" :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice"
                  :minPrice="seller.minPrice"></ele-cart>
    </div>
    <ele-food @add="addFood" :food="selectedFood" ref="food"></ele-food>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import EleCart from '../components/EleCart'
import EleCartControl from '../components/EleCartControl'
import EleFood from '../components/EleFood'

const ERR_OK = 0
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      // 定义一个空数组goods
      goods: [],
      // 定义一个数组存放右侧商品每一个区间的高度
      listHeight: [],
      // 映射左侧高度
      scrollY: 0,
      selectedFood: {}
    }
  },
  computed: {
    // 关联左侧li的高亮class'current',class="{'current':currentIndex===index}"
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        // 当前区间高度
        let height1 = this.listHeight[i]
        // 下一个区间的高度
        let height2 = this.listHeight[i + 1]
        // 遍历到最后一个值时，判断非height2 或者落到当前区间，返回i
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    // 调用ele-cart组件的时候需要引用selectFooods的计算属性,
    selectFoods () {
      let foods = []
      // 通过forEach遍历good,在遍历good下面的food
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    // 获取goods数据
    this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.goods = response.data
        // 通过$nextTick算出menuWrapper,foodsWrapper的高度，然后才能滚动
        this.$nextTick(() => {
          this._initScroll()
          // 定义_calculateHeight()方法来计算右侧商品区间的高度
          this._calculateHeight()
        })
      }
    })
  },
  methods: {
    // 左侧li点击事件,点击时要在BScroll传click: true
    selectMenu (index, event) {
      // 通过$event,阻止原生浏览器默认派发点击事件
      if (!event._constructed) {
        return
      }
      // console.log(index) 通过index找到右侧相应的区间
      let foodList = this.$refs.foodList
      // 拿到所有的列表
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    },
    // 右侧商品li点击事件
    selectFood (food, event) {
      if (!event._constructed) {
        return
      }
      // 选中food li
      this.selectedFood = food
      // 通过ref拿到子组件food并且调用它的show()方法
      this.$refs.food.show()
    },
    // 初始化一个_initScroll,用来获取要滚动的DOM
    _initScroll () {
      // 拿到左侧DOM,通过ref="menuWrapper",
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      // foodsScroll对象on事件监听scroll
      this.foodsScroll.on('scroll', (pos) => {
        // 判断滑动方向，避免下拉时分类高亮错误 （如第一分类商品数量为1时，下拉使得第二分类高亮）
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y))
        }
      })
    },
    _calculateHeight () {
      // DOM给区间的li添加一个ref="foodList"
      // 找到foodList
      let foodList = this.$refs.foodList
      // 定义一个变量
      let height = 0
      // 获取第一个区间的高度
      this.listHeight.push(height)
      // 递增，遍历foodList
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        // 高度累加，通过clientHeight接口
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    _followScrll (index) {
      let menuList = this.$refs.menuList
      let el = menuList[index]
      this.menuScroll.scrollToElement(el, 300, 0, -100)
    },
    addFood (target) {
      this._drop(target)
    },
    _drop (target) {
      // 体验优化，异步执行下落动画,快速点击两下动画缓冲,调用EleCart中的drop方法，通过$refs.elecart访问子组件ele-cart并且传入target
      this.$nextTick(() => {
        this.$refs.elecart.drop(target)
      })
    }
  },
  components: {
    EleCart,
    EleCartControl,
    EleFood
  }
}
</script>