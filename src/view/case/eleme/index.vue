<template>
  <div class="container">
    <page-header :showBackBtn="false">
      <a class="return" slot="return" @click="backreturn">
        <i class="icon-return"/>
      </a>
      <h1 class="nav_title" slot="title"><p>饿了么案例</p></h1>
    </page-header>
    <div id="ElemeIndex" class="content">
      <ele-header :seller="seller"></ele-header>
      <div class="ele-tab border-1px">
        <div class="ele-tab-item">
          <router-link to="eleme">商品</router-link>
        </div>
        <div class="ele-tab-item">
          <router-link to="ratings">评论</router-link>
        </div>
        <div class="ele-tab-item">
          <router-link to="seller">商家</router-link>
        </div>
      </div>
      <transition name="slide-fade">
        <keep-alive>
          <router-view :seller="seller"></router-view>
        </keep-alive>
      </transition>
      
    </div>
  </div>
</template>

<script>
import { urlParse } from './common/js/util'
import EleHeader from './components/EleHeader'
const ERR_OK = 0
export default {
  name: 'ElemeIndex',
  components: {
    EleHeader
  },
  computed: {
  },
  data () {
    return {
      // 定义seller用来接收数据
      seller: {
        // 接受id
        id: (() => {
          let queryParam = urlParse()
          // console.log(queryParam)
          return queryParam.id
        })()
      }
    }
  },
  created () {
    // + '?id=' + this.seller.id来获取每个商家的id
    this.$http.get('/api/seller?id' + this.seller.id).then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        // this.seller = response.data
        this.seller = Object.assign({}, this.seller, response.data)
      }
    })
  },
  methods: {
    backreturn () {
      this.$router.push('/case')
      this.$router.isBack = true
    }
  }
}
</script>

