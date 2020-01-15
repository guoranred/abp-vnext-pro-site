<template>
  <div class="main-wrapper">
    <a-row>
      <a-col class="main-menu" :xs="24" :sm="24" :md="24" :lg="6" :xl="5" :xxl="4">
        <a-affix :offset-top="0">
          <section class="main-menu-inner">
            <a-menu
              class="aside-container"
              mode="inline"
              @click="handleClick"
              :selectedKeys="selectedKeys"
              :inlineIndent="24"
            >
              <template v-for="route in abpRouterMap">
                <a-menu-item v-if="!route.items" :key="route.text">
                  <router-link :to="{ name: 'abp', params: { page: route.path } }"><span>{{ currentLang !== 'en-US' ? route.text : route.enText }}</span></router-link>
                </a-menu-item>
                <sub-menu v-else :menu-info="route" :current-lang="currentLang" :key="route.text" />
              </template>
            </a-menu>
          </section>
        </a-affix>
      </a-col>
      <a-col class="main-container" :xs="24" :sm="24" :md="24" :lg="18" :xl="19" :xxl="20">
        <div class="markdown" v-html="marked(text)">
        </div>
      </a-col>
    </a-row>
    <a-back-top />
  </div>
</template>

<script>
import { mixin } from '@/store/mixin'
import { abpRouterMap } from '@/config/router.config'
import marked from 'marked'
import SubMenu from '@/components/SubMenu'

const mdImport = (name, lang = 'en-US') => {
  const delmdName = name.replace('.md', '')
  return import(`../abp/${lang !== 'en-US' ? 'zh-Hans' : 'en'}/${delmdName}.md`)
}

const renderer = new marked.Renderer()
renderer.image = (href, title, text) => {
  const url = `/${href}`
  return '<img src="' +
    url + '"' +
    ' alt="' +
    text +
    '">'
}
renderer.heading = function (text, level) {
  // text.replace(/[^\w]+/g, '-') +
  // 生产锚点 a 链接
  const vtext = text.replace(/^\s+|\s+$/g, '-')
  const vhtml = `<a href="#${encodeURIComponent(vtext)}" aria-hidden="true" class="anchor">#</a>`
  return '<h' +
    level +
    ' id="' +
    encodeURIComponent(vtext) +
    '">' +
    text + '\n' + vhtml +
    '</h' +
    level +
    '>\n'
}
marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true
})

export default {
  name: 'Abp',
  components: {
    SubMenu
  },
  mixins: [mixin],
  data () {
    return {
      selectedKeys: [],
      abpRouterMap,
      marked,
      text: ''
    }
  },
  created () {
    const { $route: { params } } = this
    const page = params.page || 'Index'
    if (page && page !== '') {
      this.updateMenu()
    }
  },
  methods: {
    handleClick (e) {
      this.selectedKeys = [e.key]
    },
    updateMenu () {
      const { $route: { params }, $message } = this
      if (!params.page) {
        return
      }
      this.selectedKeys = [params.page]
      const md = mdImport(params.page, this.currentLang)
      md.then((...rest) => {
        this.text = rest[0].default
        this.jumpToMark()
      }).catch(err => {
        $message.error(<span>无法找到改文档或者该文档尚未完成。如果你是开发者，可以获取 <code style="background: #ccc">{err.message}</code> 并完成该文档</span>)
      })
    },
    jumpToMark () {
      const { $route: { hash } } = this
      this.$nextTick(() => {
        setTimeout(() => {
          const el = document.getElementById(`${hash.substring(1, hash.length)}`)
          if (el) {
            document.body.scrollTop = parseInt(el.offsetTop)
          }
        }, 800)
      })
    }
  },
  watch: {
    $route () {
      this.updateMenu()
    },
    currentLang () {
      this.updateMenu()
    }
  }
}
</script>
