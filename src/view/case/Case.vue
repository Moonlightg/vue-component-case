<template>
  <div class="container">
    <page-header :showBackBtn="false" title="案例"/>
    <div id="Case" class="content">
      <div class="h20"/>
      <nav class="menu">
        <li>
          <router-link :to="{path: 'case/cart/index'}" v-waves>
            <i class="icon-receipt"/>
            <p>购物车</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{path: 'case/star/index'}" v-waves>
            <i class="icon-favor"/>
            <p>评分</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{path: 'case/baseline/index'}" v-waves>
            <i class="icon-reduce"/>
            <p>baseline</p>
          </router-link>
        </li>
      </nav>
    </div>
    <page-footer active-tab="案例"/>
  </div>
</template>

<script>

export default {
  name: 'Case',
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

