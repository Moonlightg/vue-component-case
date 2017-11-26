<template>
  <div class="container">
    <page-header title="购物车案例"/>
    <div id="CartIndex" class="content">
      <ul class="item_box item_fixed">
        <li v-for="(good, index) in goods" v-waves>
          <div class="item_radio" :class="{'check': good.checked}" @click="selectedGood(good)">
            <span></span>
          </div>
          <div class="item_img">
            <img :src="good.img" alt=""/>
          </div>
          <div class="item_l">
            <b>{{ good.title }}</b>
            <div><p>{{ good.price | formatMoney }}<span>/斤</span></p></div>
          </div>
          <div class="item_l">
            <div class="nc-prices">
              <p class="price">{{ good.price*good.quantity | money('元') }}</p>
            </div>
            <div class="nc-btnbox">
              <button class="amount icon-reduce" @click="changeMoney(good,-1)" v-waves.center></button> 
              <input type="number" :value="good.quantity" v-model="good.quantity" disabled>
              <button class="amount icon-plus" @click="changeMoney(good,1)" v-waves.center></button>
            </div>
          </div>
        </li>
      </ul>
      <footer>
        <div class="footer_l">
          <div class="item_radio" :class="{'check':checkAllFlag}" @click="checkAll(true)">
            <span></span>
          </div>
          <div class="order_total">
            <span v-show="!checkAllFlag" @click="checkAll(true)">全选</span>
          </div>
          <div class="order_total" @click="checkAll(false)">
            <span v-show="checkAllFlag">取消全选</span>
          </div>
          <div class="order_total">
            总额：<span>{{totalMoney | money('元')}}</span>
          </div>
        </div>
        <a href="javascript:;" class="submit" v-waves.light>
          选好了
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartIndex',
  data () {
    return {
      totalMoney: 0,
      goods: [
        { price: 45, title: '有机里脊肉', img: '././static/images/img01.jpg', quantity: 1 },
        { price: 55, title: '牛肋条', img: '././static/images/img02.jpg', quantity: 2 },
        { price: 65, title: '智利肋排脆骨', img: '././static/images/img03.jpg', quantity: 1 },
        { price: 75, title: '法国进口瘦肉', img: '././static/images/img04.jpg', quantity: 1 }
      ],
      checkAllFlag: false
    }
  },
  filters: {
    // 价格格式过滤器el:￥50.00,value必须为number
    formatMoney (value) {
      return '¥' + value.toFixed(2)
    }
  },
  methods: {
    // 控制+-改变单个商品的总价，通过判断way的值控制最少为1件
    changeMoney (good, way) {
      if (way > 0) {
        good.quantity++
      } else {
        good.quantity--
        if (good.quantity < 1) {
          good.quantity = 1
        }
      }
      this.calcTotalPrice()
    },
    selectedGood (good) {
      // 点击时判断对象里面的变量good.checked是否存在,
      if (typeof good.checked === 'undefined') {
        // 通过 $set 往good注册一个checked并赋值为true
        this.$set(good, 'checked', true)
      } else {
        // 再点击，取反
        good.checked = !good.checked
      }
      this.calcTotalPrice()
    },
    checkAll (flag) {
      // flag传一个属性true,false
      this.checkAllFlag = flag
      var _this = this
      this.goods.forEach(function (good, index) {
        // 遍历商品列表
        if (typeof good.checked === 'undefined' && _this.checkAllFlag) {
          _this.$set(good, 'checked', _this.checkAllFlag)
        } else {
          good.checked = _this.checkAllFlag
        }
      })
      this.calcTotalPrice()
    },
    calcTotalPrice () {
      var _this = this
      // 重置每一次总价为0
      this.totalMoney = 0
      this.goods.forEach(function (good, index) {
        if (good.checked) {
          _this.totalMoney += good.price * good.quantity
        }
      })
    }
  }// ,
  // created () {
  //  this.$http.get('/api/goods').then((data) => {
  //    this.goods = data.body.data
  //  })
  // }
}
</script>