<template>
  <div class="ele-box no-bottom">
    <div class="ele-seller" ref="sellerWrapper">
      <div class="seller-content">
        <div class="overview">
          <h1 class="title">{{seller.name}}</h1>
          <div class="desc border-1px">
            <ele-star :size="36" :score="seller.score"></ele-star>
            <span class="text">{{seller.ratingCount}}</span>
            <span class="text">月售{{seller.sellCount}}单</span>
          </div>
          <ul class="remark">
            <li class="block">
              <h2>起送价</h2>
              <div class="ele-content">
                <span class="stress">{{seller.minPrice}}</span>元
              </div>
            </li>
            <li class="block">
              <h2>商家配送</h2>
              <div class="ele-content">
                <span class="stress">{{seller.deliveryPrice}}</span>元
              </div>
            </li>
            <li class="block">
              <h2>平均配送时间</h2>
              <div class="ele-content">
                <span class="stress">{{seller.deliveryTime}}</span>分钟
              </div>
            </li>
          </ul>
          <div class="favorite" @click="toggleFavorite">
            <i class="icon-favor-fill" :class="{'active':favorite}"></i>
            <span class="text">{{favoriteText}}</span>
          </div>
        </div>
        <page-split/>
        <div class="bulletin">
          <h1 class="title">公告与活动</h1>
          <div class="content-wrapper border-1px">
            <p class="ele-content">{{seller.bulletin}}</p>
          </div>
          <ul class="supports" v-if="seller.supports">
            <li class="support-item border-1px" v-for="(item,index) in seller.supports">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
        </div>
        <page-split/>
        <div class="pics">
          <h1 class="title">商家实景</h1>
          <div class="pic-wrapper" ref="picWrapper">
            <ul class="pic-list" ref="picList">
              <li class="pic-item" v-for="pic in seller.pics">
                <img :src="pic" width="120" height="90">
              </li>
            </ul>
          </div>
        </div>
        <page-split/>
        <div class="info">
          <h1 class="title border-1px">商家信息</h1>
          <ul>
            <li class="info-item" v-for="info in seller.infos">
              {{info}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {saveToLocal, loadFromLocal} from '../common/js/store'
  import EleStar from '../components/EleStar'

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        favorite: (() => {
          return loadFromLocal(this.seller.id, 'favorite', false)
        })()
      }
    },
    computed: {
      favoriteText () {
        // 如果favorite为true显示已收藏，否则未收藏
        return this.favorite ? '已收藏' : '收藏'
      }
    },
    // 关注异步更新，watch seller的变化,页面刷新加载完数据scroll变化
    watch: {
      'seller' () {
        this.$nextTick(() => {
          // 初始化scroll
          this._initScroll()
          this._initPics()
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
        this._initPics()
      })
    },
    methods: {
      toggleFavorite (event) {
        if (!event._constructed) {
          return
        }
        this.favorite = !this.favorite
        saveToLocal(this.seller.id, 'favorite', this.favorite)
      },
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.sellerWrapper, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      },
      // 横向滚动
      _initPics () {
        // 判断是否存在商家实景
        if (this.seller.pics) {
          // 每张图片的宽度
          let picWidth = 120
          // 每张图片都有一个margin-right:6px
          let margin = 6
          // 整个容器的宽度= （每个图片宽度+边距）* 图片个数 -最后一张图没有边距
          let width = (picWidth + margin) * this.seller.pics.length - margin
          // 获取ul的宽度
          this.$refs.picList.style.width = width + 'px'
          this.$nextTick(() => {
            if (!this.picScroll) {
              // 获取存放ul的容器宽度
              this.picScroll = new BScroll(this.$refs.picWrapper, {
                // 横向滚动设置为true
                scrollX: true,
                // 纵向滚动
                eventPassthrough: 'vertical'
              })
            } else {
              this.picScroll.refresh()
            }
          })
        }
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    components: {
      EleStar
    }
  }
</script>