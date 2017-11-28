<template>
  <div class="container">
    <page-header title="饿了么案例"/>
    <div id="ElemeIndex" class="content">
      <ele-header :seller="seller"></ele-header>
      <div class="tab border-1px">
        <div class="tab-item">
          <router-link to="eleme">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="ratings">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="seller">商家</router-link>
        </div>
      </div>
      <keep-alive>
        <transition name="slide-fade">
          <router-view></router-view>
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
  }
}
</script>

