<template>
  <div class="container">
    <page-header :showBackBtn="false">
      <a class="return" slot="return" @click="backreturn">
        <i class="icon-return"/>
      </a>
      <h1 class="nav_title" slot="title"><p>学乐乐案例</p></h1>
    </page-header>
    <div class="content">
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
    <xue-footer active-tab="首页"></xue-footer>
  </div>
</template>

<script>
import XueFooter from './components/XueFooter'
const ERR_OK = 0
export default {
  components: {
    XueFooter
  },
  computed: {
  },
  data () {
    return {
      bannerList: []
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
  methods: {
    backreturn () {
      this.$router.push('/case')
      this.$router.isBack = true
    }
  }
}
</script>
<style type="text/css">
.product_list li img{
  width: 100%;
}
</style>

