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
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ele-rating-select @select="selectRating" @toggle="toggleContent" :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings"></ele-rating-select>
          <!-- 评价列表 -->
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in food.ratings" class="rating-item border-1px">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" width="12" height="12" :src="rating.avatar">
                </div>
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <span :class="{'icon-smile':rating.rateType===0,'icon-smiles ':rating.rateType===1}"></span>{{rating.text}}
                </p>
              </li>
            </ul>
            <!-- 暂无评价 -->
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vue from 'vue'
  import {formatDate} from '../common/js/date'
  import EleCartControl from './EleCartControl'
  import EleRatingSelect from './EleRatingSelect'
  // 正面评价
  // const POSITIVE = 0
  // 负面评价
  // const NEGATIVE = 1
  // 全部评价
  const ALL = 2

  export default {
    props: {
      // 接收一个goods传进来的food
      food: {
        type: Object
      }
    },
    components: {
      EleCartControl,
      EleRatingSelect
    },
    data () {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    methods: {
      // 显示详情方法,goods.vue点击商品时调用这个方法，通过ref绑定
      show () {
        this.showFlag = true
        // 每次show详情的时候初始化评论
        this.selectType = ALL
        this.onlyContent = true
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
      },
      needShow (type, text) {
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return type === this.selectType
        }
      },
      selectRating (type) {
        this.selectType = type
        // 调用scroll.refresh方法来刷新区间高度，必须要通过$nextTick之后才能更新dom
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      // 显示评论内容切换
      toggleContent () {
        this.onlyContent = !this.onlyContent
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    }
  }
</script>