<template functional>
  <a-sub-menu :key="props.menuInfo.text">
    <span slot="title">
      <span>{{ props.menuInfo.text }}</span>
    </span>
    <template v-for="item in props.menuInfo.items">
      <a-menu-item v-if="!item.items" :key="item.text" :disabled="!item.path">
        <router-link :to="{ name: 'abp', params: { page: item.path } }"><span>{{ currentLang !== 'en-US' ? item.text : item.text }}</span></router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.text" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
import { mixin } from '@/store/mixin'
export default {
  name: 'SubMenu',
  mixins: [mixin],
  props: ['menuInfo']
}
</script>
