<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease">
        <span class="inner icon-reduce"></span>
      </div>
    </transition>
    <div class="cart-count">0</div>
    <div class="cart-add icon-plus"></div>
  </div>
</template>

<script>
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
    }
  }
</script>
