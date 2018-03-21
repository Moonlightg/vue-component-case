<template>
  <div class="container">
    <page-header :showBackBtn="false" title="首页"/>
    <div id="Home" class="content"> 
      <div class="home-wrapper" ref="homeWrapper">
        <div>
          <div class="user-wrapper">
            <a href="https://github.com/Moonlightg">
              <div class="user-name user_l">
                <img src="../../static/images/moonlight.jpg">
              </div>
            </a>
          </div>
          <div class="user-info">
            <h1>Moonlight</h1>
            <p>常用组件开发笔记</p>
            <p>持续开发更新</p>
            <p>1.less样式模块化</p>
            <p>2.路由页面切换效果</p>
            <p>3.点击波澜涟漪效果</p>
            <p>4.actionSheet弹窗组件（全局）</p>
            <p>5.app顶部栏组件（全局）</p>
            <p>6.app底部菜单组件（全局）</p>
            <p>7.购物车案例</p>
            <p>8.星星评分案例</p>
            <p>9.baseline底线</p>
            <p>10.饿了么案例</p>
            <p>11.学乐乐--开发中~~~</p>
          </div>
        </div>
      </div>
      <page-footer active-tab="首页"/>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll () {
      this.homeScroll = new BScroll(this.$refs.homeWrapper, {
        click: true
      })
    }
  }
}
</script>
<style type="text/css">
  .home-wrapper{
    position: absolute;
    top: 2rem;
    right: 0;
    bottom: 2.5rem;
    left: 0;
  }
</style>
