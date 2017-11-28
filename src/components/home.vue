<template>
  <div class="container">
    <page-header :showBackBtn="false" title="首页"/>
    <div id="Home" class="content"> 
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
        <p>10.饿了么案例--开发中~~~</p>
      </div>
      

      <!-- <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row> -->
      <page-footer active-tab="首页"/>
    </div>
  </div>
</template>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
