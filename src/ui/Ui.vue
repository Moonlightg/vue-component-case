<template>
	<div class="container">
	    <page-header :showBackBtn="false" title="Ui"/>
		<div class="content">
		    <div class="h20" />
		    <nav class="menu">
		        <li>
		            <router-link :to="{path: 'ui/order'}" v-waves>
		            	<i class="icon-receipt"/>
		            	<p>订单</p>
		            </router-link>
		        </li>
		        <li>
		            <router-link :to="{path: 'ui/order'}" v-waves>
		            	<i class="icon-receipt"/>
		            	<p>购物车</p>
		            </router-link>
		        </li>
		    </nav>
		    <div class="h20" />
		</div>
		<page-footer active-tab="Ui"/>
	</div>
</template>

<script>
export default {
  name: 'ui'
}
</script>

