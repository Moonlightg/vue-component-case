<template>
  <div id="Two">
    <page-header :showBackBtn="false" title="商品"/>
    <div class="content">
      <div class="product_list">
        <ul>
          <li v-for="good in goods">  
            <div class="product_item" v-waves>
              <div class="product_img">  
                <img :src="good.img" alt="">  
              </div>  
              <p>{{ good.title }}</p>  
              <p>￥{{ good.price }}<span>/斤</span></p> 
            </div> 
          </li>
        </ul>
      </div>
    </div>
    <page-footer active-tab="商品"/>
  </div>
</template>

<script>
export default {
  name: 'Two',
  data () {
    return {
      goods: []
    }
  },
  components: {
  },
  created () {
    this.$http.get('/api/goods').then((data) => {
      this.goods = data.body.data
    })
  }
}
</script>
