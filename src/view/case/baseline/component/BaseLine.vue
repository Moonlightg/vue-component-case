<template>
  <div class="baseline-title">
    <div class="line"></div>
      <div class="text">{{lineText}}</div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    lineText: {
      type: String
    }
  }
}
</script>