<template>
  <div class="container">
    <div class="content">

      <!--内容-->
        <!--列表-->
        <div class="product_list">
          <ul>
            <li>
              <div class="product_item" @click="showGoodsQuotePrice" v-waves>
                <div class="badeg">99</div>
                <div class="product_img">
                  <img src="../../../static/images/img01.jpg" />
                </div>
                <p>家乐都有机里脊肉</p>
                <p>¥13.6 <span>/斤</span></p>
              </div>
            </li>
          </ul>
        </div>

      <!--产品详情-->
      <action-sheet class="product_detail" asKey="goodsQuotePrice">
        <!--产品-->
        <div class="product_item">
          <div class="product_img">
          </div>
          <p>家乐都有机里脊肉</p>
          <p>¥56.6 <span>/斤</span></p>
        </div>
        <!--数量-->
        <div class="choose_amount">
          <button class="amount icon-reduce" disabled v-waves.center></button>
          <input type="number" precision="2" name="amout" value="0" placeholder="数量" />
          <button class="amount icon-plus" v-waves.center></button>
        </div>
        <div class="h16" />
        <div class="h16" />
      </action-sheet>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Orderlist',
  components: {
  },
  data () {
    return {}
  },
  methods: {
    // 让操作表显示调用这个方法
    showGoodsQuotePrice () {
      this.showActionSheet('goodsQuotePrice')
    },
    hideGoodsQuotePrice () {
      this.hideActionSheet('goodsQuotePrice')
    }
  }
}
</script>
