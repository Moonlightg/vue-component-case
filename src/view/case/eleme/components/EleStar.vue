<template>
  <div class="ele-star" :class="starType">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="ele-star-item" key="index"></span>
  </div>
</template>

<script>
  // 定义常量 个数为5
  const LENGTH = 5
  // 定义常量有星星的class为'on'
  const CLS_ON = 'on'
  // 定义常量有半颗星星的class为'half'
  const CLS_HALF = 'half'
  // 定义常量没星星的class为'off'
  const CLS_OFF = 'off'

  export default {
    props: {
      // 传递一个值为星星的大小
      size: {
        type: Number
      },
      score: {
        // 传递一个星星分数
        type: Number
      }
    },
    components: {
    },
    computed: {
      // 计算添加一个class设置星星的大小值
      starType () {
        return 'ele-star-' + this.size
      },
      itemClasses () {
        // 定义一个result变量，它是一个数组
        let result = []
        // 通过分数计算，向下取整,取0.5倍数的值
        let score = Math.floor(this.score * 2) / 2
        // 判断是否存在0.5
        let hasDecimal = score % 1 !== 0
        let integer = Math.floor(score)
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON)
        }
        if (hasDecimal) {
          result.push(CLS_HALF)
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF)
        }
        return result
      }
    }
  }
</script>
