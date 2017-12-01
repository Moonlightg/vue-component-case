<template>
  <transition name="move">
    <div v-show="showFlag" class="ele-food" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
          <div class="back" @click="hide">
            <i class="el-icon-close"></i>
          </div>
        </div>
        <div class="ele-content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <ele-cart-control @add="addFood" :food="food"></ele-cart-control>
          </div>
          <transition name="fade">
            <!-- 商品数量不存在或者商品数量为0 显示加入购物车 ,点击添加一个商品-->
            <div @click.stop.prevent="addFirst" class="buy" v-show="!food.count || food.count===0">加入购物车</div>
          </transition>
        </div>
        <page-split></page-split>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vue from 'vue'
  import EleCartControl from './EleCartControl'
  export default {
    props: {
      // 接收一个goods传进来的food
      food: {
        type: Object
      }
    },
    components: {
      EleCartControl
    },
    data () {
      return {
        showFlag: false
      }
    },
    methods: {
      // 显示详情方法,goods.vue点击商品时调用这个方法，通过ref绑定
      show () {
        this.showFlag = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            })
          } else {
            // 调用refresh()重新计算
            this.scroll.refresh()
          }
        })
      },
      // 隐藏详情
      hide () {
        this.showFlag = false
      },
      // 加入购物车按钮事件，
      addFirst (event) {
        if (!event._constructed) {
          return
        }
        // 启用小球动画,需要在goods.vue引用的ele-food组件中添加@add="addFood"
        this.$emit('add', event.target)
        // 添加商品1
        Vue.set(this.food, 'count', 1)
      },
      addFood (target) {
        this.$emit('add', target)
      }
    }
  }
</script>