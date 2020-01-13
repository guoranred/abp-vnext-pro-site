import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { setDocumentTitle } from '@/utils/domUtil'

router.beforeEach((to, from, next) => {
  console.log(to)

  NProgress.start()
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(to.meta.title))

  if (!to.name || to.path.includes('.md')) {
    // let page = encodeURIComponent(to.path.replace('.md', '').replace('/abp', '').substring(1))
    let page = to.path.replace('.md', '').replace('/abp', '').substring(1)
    let params = {
      page: page
    }
    let path = `/abp/${page}`
    next({ path: path, params: params, replace: true })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
