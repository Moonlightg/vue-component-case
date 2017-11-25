<template>
  <div class="container">
    <page-header title="订单"/></page-header>
    <div class="content">
        <div class="h20" />
        <nav class="order_menu">
          <li>
            <router-link :to="{path: '/ui/list'}" v-waves>
              <i class="icon-cart"></i>
              <p>立即下单</p>
            </router-link>
          </li>
          <li>
            <a href="javascript:;" v-waves>
              <i class="icon-account"></i>
              <p>电子台账</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" v-waves>
              <i class="icon-account"></i>
              <p>电子台账</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" v-waves>
              <i class="icon-account"></i>
              <p>电子台账</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" v-waves>
              <i class="icon-account"></i>
              <p>电子台账</p>
            </a>
          </li>
          <li></li>
        </nav>
        <nav class="order_menu">
          <li>
            <a href="javascript:;" v-waves>
              <i class="icon-confirm"></i>
              <p>确认订单</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" v-waves>
              <i class="icon-history"></i>
              <p>供货订单</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" v-waves>
              <i class="icon-lorry"></i>
              <p>送货验收</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" v-waves>
              <i class="icon-recon"></i>
              <p>对账单</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" v-waves>
              <i class="icon-enquiry"></i>
              <p>询价单</p>
            </a>
          </li>
          <li></li>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Orderindex'
}
</script>
