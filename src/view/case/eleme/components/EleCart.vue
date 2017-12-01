<template>
  <div>
    <div class="ele-cart">
    	<div class="ele-content">
    	  <div class="content-left" @click="toggleList">
    	  	<div class="logo-wrapper">
    	  	  <div class="logo" :class="{'highlight':totalCount>0}">
              <i class="icon-cart" :class="{'highlight':totalCount>0}"></i>  
            </div>
            <!-- 选择的商品数量大于0是显示 -->
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
    	  	</div>
          <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
    	  </div>
    	  <div class="content-right" @click="pay">
          <div class="pay" :class="payClass">
            {{payDesc}}
          </div> 
        </div>
    	</div>
      <!-- 抛物线小球 -->
      <div class="ball-container">
        <div v-for="ball in balls">
          <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
      <!-- 购物车列表 -->
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="food in selectFoods">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price*food.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <ele-cart-control @add="addFood" :food="food"></ele-cart-control>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" @click="hideList" v-show="listShow"></div>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import EleCartControl from './EleCartControl'

  export default {
    props: {
      // 父组件传商品数组
      selectFoods: {
        type: Array,
        default () {
          return [
            {
              price: 10,
              count: 1
            }
          ]
        }
      },
      // 配送费
      deliveryPrice: {
        type: Number,
        // 默认值
        default: 0
      },
      // 起送费
      minPrice: {
        type: Number,
        default: 0
      }
    },
    components: {
      EleCartControl
    },
    data () {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        // 已经下落的小球
        dropBalls: [],
        // 购物车列表的true
        fold: true
      }
    },
    computed: {
      // 计算商品总价
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          // 总价=价格*数量
          total += food.price * food.count
        })
        return total
      },
      // 计算选择商品的数量总和
      totalCount () {
        let count = 0
        this.selectFoods.forEach((food) => {
          count += food.count
        })
        return count
      },
      // 计算起送状态与提示显示
      payDesc () {
        // 判断商品总价
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice
          return `还差￥${diff}元起送`
        } else {
          return `去结算`
        }
      },
      // 去结算样式判断
      payClass () {
        if (this.totalPrice < this.minPrice) {
          return 'not-enough'
        } else {
          return 'enough'
        }
      },
      // 计算购物是否为空，不为空显示
      listShow () {
        if (!this.totalCount) {
          this.fold = true
          return false
        }
        let show = !this.fold
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.listContent, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
        return show
      }
    },
    methods: {
      // 定义小球下落方法
      drop (el) {
        // 遍历小球balls
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            ball.el = el
            // 输出已经下落的小球
            this.dropBalls.push(ball)
            return
          }
        }
      },
      toggleList () {
        // 如果等于0,返回,点击没反应
        if (!this.totalCount) {
          return
        }
        this.fold = !this.fold
      },
      hideList () {
        this.fold = true
      },
      empty () {
        // 遍历所有food,设为0则清空
        this.selectFoods.forEach((food) => {
          food.count = 0
        })
      },
      pay () {
        if (this.totalPrice < this.minPrice) {
          return
        }
        window.alert(`支付${this.totalPrice}元`)
      },
      addFood (target) {
        this.drop(target)
      },
      // JavaScript钩子
      // beforeDrop 找到所有为true的小球
      beforeDrop (el) {
        let count = this.balls.length
        while (count--) {
          let ball = this.balls[count]
          if (ball.show) {
            // 获取小球相当于视图的位置
            let rect = ball.el.getBoundingClientRect()
            let x = rect.left - 32
            let y = -(window.innerHeight - rect.top - 22)
            el.style.display = ''
            el.style.webkitTransform = `translate3d(0,${y}px,0)`
            el.style.transform = `translate3d(0,${y}px,0)`
            let inner = el.getElementsByClassName('inner-hook')[0]
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`
            inner.style.transform = `translate3d(${x}px,0,0)`
          }
        }
      },
      dropping (el, done) {
        /* eslint-disable no-unused-vars */
        // 触发浏览器重绘
        let rf = el.offsetHeight
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0,0,0)'
          el.style.transform = 'translate3d(0,0,0)'
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = 'translate3d(0,0,0)'
          inner.style.transform = 'translate3d(0,0,0)'
          el.addEventListener('transitionend', done)
        })
      },
      afterDrop (el) {
        // 完成后将小球设置为false
        let ball = this.dropBalls.shift()
        if (ball) {
          ball.show = false
          el.style.display = 'none'
        }
      }
    }
  }
</script>