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
      <keep-alive>
        <transition name="slide-fade">
          <router-view :seller="seller"></router-view>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
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
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seeler, response.data)
      }
    })
  },
  methods: {
    backreturn: function () {
      this.$router.push('/case')
      this.$router.isBack = true
    }
  }
}
</script>

