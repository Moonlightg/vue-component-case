<template>
  <!--footer-->
    <footer>
      <!--底部页面链接-->
      <ul>
        <li v-for="menu in menus" v-waves.block>
          <a :href="menu.href" :class="[activeTab === menu.name ? 'column current': 'column']">
            <!--字体图标-->
            <span :class="[activeTab === menu.name ? menu.icons : menu.icon]">
              <!--消息提醒-->
              <div class="badeg"></div>
            </span>
            <!--页标题-->
            <p>{{menu.name}}</p>
          </a>
        </li>
      </ul>
    </footer>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {name: '首页', href: '#/', icon: 'icon-home', icons: 'icon-home-fill'},
        {name: '案例', href: '#/case', icon: 'icon-favor', icons: 'icon-favor-fill'},
        {name: '文档', href: '#/two', icon: 'icon-community', icons: 'icon-community-fill'},
        {name: 'Ui', href: '#/ui', icon: 'icon-community', icons: 'icon-community-fill'}
      ]
    }
  },
  props: {
    activeTab: {
      type: String,
      required: true
    }
  }
}
</script>
