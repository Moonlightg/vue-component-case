<template>
  <div v-if="actionSheet.show || actionSheet.hidden" class="actionSheet" :class="{'show': actionSheet.show,'hidden': actionSheet.hidden}">
    <!--遮罩层-->
    <div class="actionSheet_mask" v-on:click="out()"></div>
    <!--主体-->
    <div class="actionSheet_content">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        actionSheet: {
          show: false,
          hidden: false,
          key: this.asKey
        }
      }
    },
    props: {
      asKey: {
        type: String,
        required: true
      },
      hideTime: {
        type: Number,
        required: false
      },
      onHide: {
        type: Function,
        required: false
      }
    },
    methods: {
      // 点击遮罩时隐藏操作表
      out () {
        this.$events.emit('hideActionSheet', this.actionSheet.key)
      }
    },
    created () {
      this.$events.on('showActionSheet', (key) => {
        if (key === this.actionSheet.key) {
          this.actionSheet.show = true
          this.actionSheet.hidden = false
        }
      })
      this.$events.on('hideActionSheet', (key) => {
        if (key === this.actionSheet.key) {
          this.onHide && this.onHide()
          this.actionSheet.show = false
          this.actionSheet.hidden = true
          setTimeout(() => {
            this.actionSheet.show = false
            this.actionSheet.hidden = false
          }, this.hideTime || 600)
        }
      })
    }
  }
</script>
