<template>  
  <li class="sec_li">  
    <router-link to="/detail" class="lp_li_a">  
      <div class="lp_li_imgWrap">  
        <img :src="img" alt="">  
      </div>  
      <p class="lp_li_name">{{ title }}</p>  
      <p class="lp_li_price">￥{{ price }}元</p>  
    </router-link>  
  </li>  
</template> 

<style>  
  
</style> 
<script>
  export default {
    props: ['price', 'title', 'img']
  }
</script>
