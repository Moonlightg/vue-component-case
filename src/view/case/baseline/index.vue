<template>
  <div class="container">
    <page-header title="baseline-title"/>
    <div id="BaseLineIndex" class="content">
      <base-line lineText="我是有底线的"></base-line> 
    </div>
  </div>
</template>

<script>
import BaseLine from './component/BaseLine'
export default {
  name: 'BaseLineIndex',
  data () {
    return {
    }
  },
  components: {
    BaseLine
  }
}
</script>