<template>
  <div class="ele-cartcontrol">
    <transition name="move">
    	<div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
    	  <span class="inner el-icon-remove-outline"></span>
    	</div>
    </transition>
  	<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
  	<div class="cart-add el-icon-circle-plus" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      // 点击加号添加数量
      addCart (event) {
        // food上的点击需要在goods中的foodsScroll区间上设置click:true，并通过event判断
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
          // this.food.count = 1
          // 需要import Vue ,通过Vue.set方法才能检测到变化
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        // 点击添加商品时派发一个事件，用于抛物线小球动画,把add作为事件参数传入event.target,然后去goods组件写一个事件
        this.$emit('add', event.target)
      },
      // 点击减号减去数量
      decreaseCart (event) {
        if (!event._constructed) {
          return
        }
        if (this.food.count) {
          this.food.count--
        }
      }
    }
  }
</script>