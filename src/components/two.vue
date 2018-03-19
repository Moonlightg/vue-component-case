<template>
  <div id="Two">
    <page-header :showBackBtn="false" title="文档"/>
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
    <page-footer active-tab="文档"/>
  </div>
</template>

<script>
const ERR_OK = 0
export default {
  name: 'Two',
  data () {
    return {
      bannerList: []
    }
  },
  components: {
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
  }
}
</script>
<style type="text/css">
.product_list li img{
  width: 100%;
}
</style>
