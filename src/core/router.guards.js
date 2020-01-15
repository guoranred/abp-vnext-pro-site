import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { setDocumentTitle } from '@/utils/domUtil'

router.beforeEach((to, from, next) => {
  NProgress.start()
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(to.meta.title))

  if (!to.name || to.path.includes('.md')) {
    const page = encodeURIComponent(to.path.replace('.md', '').replace('/abp', '').substring(1))
    next({ path: `/abp/${page}`, params: { page: page }, replace: true })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
