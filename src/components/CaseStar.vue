<template>
  <div class="container">
    <page-header title="评分"/>
    <div id="CaseStar" class="content">
      <div class="h20"/>
      <star :size="50" :score="5"></star>
      <star :size="40" :score="4"></star>
      <star :size="30" :score="3"></star>
      <star :size="20" :score="2"></star>
      <star :size="10" :score="1"></star>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CaseStar',
  components: {
  },
  computed: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

