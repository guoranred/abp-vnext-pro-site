<template functional>
  <a-sub-menu :key="props.menuInfo.text">
    <span slot="title">
      <span>{{ props.currentLang !== 'en-US' ? props.menuInfo.text : props.menuInfo.enText }}</span>
    </span>
    <template v-for="item in props.menuInfo.items">
      <a-menu-item v-if="!item.items" :key="item.text" :disabled="!item.path">
        <router-link :to="{ name: 'abp', params: { page: item.path } }"><span>{{ props.currentLang !== 'en-US' ? item.text : item.enText }}</span></router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.text" :menu-info="item" :current-lang="props.currentLang" />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: 'SubMenu',
  props: ['menuInfo', 'currentLang']
}
</script>
