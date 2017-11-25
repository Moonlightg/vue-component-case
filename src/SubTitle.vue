<template>
  <!--标题-->
  <nav class="sub_title">
    <template v-if="title && title !== ''">
      <h4 :class="{'color': modeColor}">{{title}}</h4>
    </template>
    <slot/>
  </nav>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      modeColor: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      // 点击遮罩时隐藏操作表
      actionSheetOut () {
        this.$emit('hideActionSheet', this.actionSheetKey)
      }
    }
  }
</script>
