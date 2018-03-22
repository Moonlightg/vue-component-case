<template>
  <div class="container">
    <page-header :showBackBtn="false">
      <a class="return" slot="return" @click="backreturn">
        <i class="icon-return"/>
      </a>
      <h1 class="nav_title" slot="title"><p>ArcProgress</p></h1>
    </page-header>
    <div class="content">
      <arc-progress :size="200" :gap="100" :strokeWidth="10" :progress="70" backgroundColor="#f5f6f7" progressColor="blue"></arc-progress>
    </div>
  </div>
</template>

<script>
import ArcProgress from './components/ArcProgress'
export default {
  components: {
    ArcProgress
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    backreturn () {
      this.$router.push('/case')
      this.$router.isBack = true
    }
  }
}
</script>
<style rel="stylesheet" lang="less">
  .product_list li img{
    width: 100%;
  }
</style>

