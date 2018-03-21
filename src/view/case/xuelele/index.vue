<template>
  <div class="container">
    <page-header :showBackBtn="false">
      <a class="return" slot="return" @click="backreturn">
        <i class="icon-return"/>
      </a>
      <h1 class="nav_title" slot="title"><p>学乐乐案例</p></h1>
    </page-header>
    <div class="content">
      <div class="x-home-wrapper" ref="xHomeWrapper">
        <div>
          <div class="slide-render-view x-banner">
            <div class="slide-wrapper">
              <div class="slide-content">
                <page-slide ref="slide" :autoPlay="isAutoPlay" :loop="isLoop" :showDot="isShowDot" :interval="interval" :threshold="threshold" :speed="speed">
                  <div v-for="item in data">
                    <a :href="item.linkUrl">
                      <img :src="item.picUrl">
                    </a>
                  </div>
                </page-slide>
              </div>
            </div>
          </div>
          <div class="x-title">
            <h1>新课上架</h1>
            <a href="javascript:;">更多新课<i class="icon-arrow"></i></a>
          </div>
          <!-- 新课上架 -->
          <div class="x-home-newcourse">
            <a href="javascript:;">
              <div class="img-block img-block-1">
                <img data-src="" alt="专题封面" class="item-img  " src="https://s.xuelele.10155.com/resource/xll/OLCourse/2018-01-19/5a61a5ffc7d1c_crop.png?t=middle">
              </div>
            </a>
            <a href="javascript:;">
              <div class="img-block img-block-2">
                <img data-src="" alt="专题封面" class="item-img  " src="https://s.xuelele.10155.com/resource/xll/OLCourse/2018-01-19/5a61a60dcd473_crop.jpg?t=middle">
              </div>
            </a>
            <a href="javascript:;">
              <div class="img-block img-block-3">
                <img data-src="" alt="专题封面" class="item-img  " src="https://s.xuelele.10155.com/resource/xll/OLCourse/2018-01-21/5a64b2e4b5c33_crop.jpg?t=middle">
              </div>
            </a>
          </div>
          <div class="x-h20"></div>
          <div class="x-title">
            <h1>好课推荐</h1>
          </div>
          <div class="x-course">
            <div class="x-title">
              <span class="cate-title">知识素养</span>
              <a href="javascript:;">更多新课<i class="icon-arrow"></i></a>
            </div>
            <!-- 课程推荐列表 -->
            <ul class="x-course-list">
              <li class="x-course-item">
                <div class="lecturer">
                  <div class="lecturer-img">
                    <img data-src="" alt="课程封面" class="item-img  " src="https://s.xuelele.10155.com/resource/xll/OLCourse/2017-11-27/5a1b874fad851_crop.jpg?t=little">
                  </div>
                </div>
                <div class="vertical-course">
                  <p class="vertical-course-name">樊登带你开启高效阅读人生</p> 
                  <p class="vertical-course-slogan">48本书轻松读，用知识武装自己！</p> 
                  <div class="vertical-course-flex">
                    <span class="flex-static-size vertical-course-secnum">已更新1节</span> 
                    <p class="flex-main text-right vertical-course-update">已更新完</p>
                  </div> 
                  <div class="vertical-course-flex">
                    <p class="vertical-course-buynum">3人在学</p> 
                    <p class="vertical-course-price">￥9/月</p>
                  </div>
                </div>
              </li>
              <li class="x-course-item">
                <div class="lecturer">
                  <div class="lecturer-img">
                    <img data-src="" alt="课程封面" class="item-img  " src="https://s.xuelele.10155.com/resource/xll/OLCourse/2017-11-27/5a1b874fad851_crop.jpg?t=little">
                  </div>
                </div>
                <div class="vertical-course">
                  <p class="vertical-course-name">樊登带你开启高效阅读人生</p> 
                  <p class="vertical-course-slogan">48本书轻松读，用知识武装自己！</p> 
                  <div class="vertical-course-flex">
                    <span class="flex-static-size vertical-course-secnum">已更新1节</span> 
                    <p class="flex-main text-right vertical-course-update">已更新完</p>
                  </div> 
                  <div class="vertical-course-flex">
                    <p class="vertical-course-buynum">3人在学</p> 
                    <p class="vertical-course-price">￥9/月</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="x-h20"></div>
          <div class="x-title">
            <h1>精彩活动</h1>
            <a href="javascript:;">更多活动<i class="icon-arrow"></i></a>
          </div>
          <div class="x-home-topic-wrapper">
            <div class="x-home-topic" ref="topicWrapper">
              <ul class="topic-list" ref="topicList">
                <li>
                  <div class="topic-img"> 
                    <img data-src="https://s.xuelele.10155.com/resource/xll/ArticleTopic/2017-11-01/59f92173ec9b3_crop.png?t=middle" alt="专题封面" src="https://s.xuelele.10155.com/resource/xll/ArticleTopic/2017-11-01/59f92173ec9b3_crop.png?t=middle">
                  </div>
                </li>
                <li>
                  <div class="topic-img">
                    <img data-src="https://s.xuelele.10155.com/resource/xll/ArticleTopic/2017-11-01/59f921686dff6_crop.png?t=middle" alt="专题封面" src="https://s.xuelele.10155.com/resource/xll/ArticleTopic/2017-11-01/59f921686dff6_crop.png?t=middle">
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="product_list">
            <ul>
              <li v-for="banner in bannerList">  
                <div class="product_item" v-waves>
                  <p>bn_id: {{ banner.bn_id }}</p>
                  <a :href="banner.bn_url" target="_blank">
                    <img :src="banner.bn_img">
                  </a>
                  <p>bn_order: {{banner.bn_order}}</p>
                  <p>bn_position: {{banner.bn_position}}</p>
                  <p>bn_type: {{banner.bn_type}}</p>
                  <p>bn_status: {{banner.bn_status}}</p>
                  <p>bn_start_time: {{banner.bn_start_time}}</p>
                  <p>bn_end_time: {{banner.bn_end_time}}</p>
                  <p>bn_create_time: {{banner.bn_create_time}}</p>
                  <p>bn_update_time: {{banner.bn_update_time}}</p>
                  <p>STATUS: {{banner.STATUS}}</p>
                </div> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <xue-footer active-tab="首页"></xue-footer>
  </div>
</template>

<script>
import XueFooter from './components/XueFooter'
import BScroll from 'better-scroll'
const items = [
  [
    {
      linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
      picUrl: 'https://s.xuelele.10155.com//resource//xll//Banner//2017-10-31//59f7d163275a8_crop.jpg',
      id: 11351
    },
    {
      linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
      picUrl: 'https://s.xuelele.10155.com//resource//xll//Banner//2017-10-31//59f7da9e0e727_crop.png',
      id: 11372
    }
  ],
  [
    {
      linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
      picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
      id: 11378
    },
    {
      linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
      picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
      id: 11375
    },
    {
      linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
      picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
      id: 11287
    }
  ]
]
const ERR_OK = 0
const COMPONENT_NAME = 'slide-render'
export default {
  name: COMPONENT_NAME,
  components: {
    XueFooter
  },
  computed: {
    data () {
      return items[this.index]
    }
  },
  data () {
    return {
      bannerList: [],
      index: 0,
      turnToPrev: false,
      turnToNext: false,
      isAutoPlay: true,
      isLoop: true,
      isShowDot: true,
      speed: 400,
      threshold: 0.3,
      interval: 4000
    }
  },
  created () {
    // 获取goods数据
    this.$http.get('/api/bannerList').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.bannerList = response.data
        console.log('成功')
      }
    })
  },
  mounted () {
    this.$nextTick(() => {
      this._xhomeScroll()
      this._initPics()
    })
  },
  methods: {
    backreturn () {
      this.$router.push('/case')
      this.$router.isBack = true
    },
    _xhomeScroll () {
      this.xhoneScroll = new BScroll(this.$refs.xHomeWrapper, {
        click: true
      })
    },
    // 横向滚动
    _initPics () {
      // 每张图片的宽度
      let topicWidth = 280
      // 每张图片都有一个margin-right:6px
      let margin = 10
      // 整个容器的宽度= （每个图片宽度+边距）* 图片个数(this.seller.pics.length) -最后一张图没有边距
      let width = (topicWidth + margin) * 2 - margin
      // 获取ul的宽度
      this.$refs.topicList.style.width = width + 'px'
      this.$nextTick(() => {
        if (!this.topicScroll) {
          // 获取存放ul的容器宽度
          this.topicScroll = new BScroll(this.$refs.topicWrapper, {
            // 横向滚动设置为true
            scrollX: true,
            // 纵向滚动
            eventPassthrough: 'vertical'
          })
        } else {
          this.topicScroll.refresh()
        }
      })
    }
  }
}
</script>
<style rel="stylesheet" lang="less">
  .product_list li img{
    width: 100%;
  }
</style>

