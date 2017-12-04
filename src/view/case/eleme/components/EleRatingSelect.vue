<template>
	<div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0,$event)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(1,$event)" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on':onlyContent}">
      <span class="icon-colorzhi"></span>
      <span class="text">只看有内容的评价</span>
    </div> 
  </div>
</template>

<script>
  // 父组件需要更改描述时需要定义一下三个常量
  // 正面评价
  const POSITIVE = 0
  // 负面评价
  const NEGATIVE = 1
  // 全部评价
  const ALL = 2

  export default {
    props: {
      ratings: {
        type: Array,
        default () {
          return []
        }
      },
      // 选择类型，定义三个常量
      selectType: {
        type: Number,
        // 默认是所有的评价all
        default: ALL
      },
      // 显示内容
      onlyContent: {
        // 布尔值，选择是否显示
        type: Boolean,
        default: false
      },
      // 描述
      desc: {
        // 传一个对象Object
        type: Object,
        // 对象有三个key
        default () {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    },
    computed: {
      // 计算所有正面评价，通过filter的数组方法进行过滤
      positives () {
        return this.ratings.filter((rating) => {
          // 返回rating中rateType: 0的数据
          return rating.rateType === POSITIVE
        })
      },
      // 计算所有负面评价
      negatives () {
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE
        })
      }
    },
    methods: {
      // 点击切换状态
      select (type, event) {
        if (!event._constructed) {
          return
        }
        // 派发一个事件让父组件知道type的值，父组件监听这个事件，完成通讯
        this.$emit('select', type)
      },
      toggleContent (event) {
        if (!event._constructed) {
          return
        }
        this.$emit('toggle')
      }
    }
  }
</script>