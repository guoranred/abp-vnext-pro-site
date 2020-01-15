<template>
  <div id="footer">
    <div class="footer-wrapper">
      <a-row>
        <a-col :xs="24" :sm="24" :md="6">
          <footer-center title="相关资源">
            <div><a target="_blank" rel="noopener noreferrer" href="https://abp.io/">Abp vNext</a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="https://aspnetboilerplate.com/">ASP.NET Boilerplate</a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="https://vue.ant.design/">Ant Design Vue</a> <span> - </span>Ant Design of Vue</div>
          </footer-center>
        </a-col>
        <a-col :xs="24" :sm="24" :md="6">
          <footer-center title="社区专栏">
            <div><a target="_blank" rel="noopener noreferrer" href="https://blog.abp.io/abp"><span>官方博客</span></a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/questions/tagged/abp">StackOverflow</a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/abpframework">Twitter</a></div>
          </footer-center>
        </a-col>
        <a-col :xs="24" :sm="24" :md="6">
          <footer-center title="帮助">
            <div><a target="_blank " href="https://github.com/guoranred/abp-vnext-pro-site">GitHub</a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/guoranred/abp-vnext-pro-site/issues"><span>贡献建议</span></a></div>
          </footer-center>
        </a-col>
        <a-col :xs="24" :sm="24" :md="6">
          <footer-center>
            <template slot="title">
              <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" class="title-icon">
              <span>更多产品</span>
            </template>
            <!-- <div><a href="https://antv.alipay.com/" rel="noopener noreferrer" target="_blank">AntV</a><span> - </span><span>数据可视化</span></div>
            <div><a href="https://eggjs.org/" rel="noopener noreferrer" target="_blank">Egg</a><span> - </span><span>企业级 Node 开发框架</span></div> -->
          </footer-center>
        </a-col>
      </a-row>
    </div>
    <div class="footer-bar">
      <p>Made with <span class="heart">❤</span> by <a target="_blank" rel="noopener noreferrer" href="https://github.com/guoranred">开心果然</a></p>
      <p>Inspired <a target="_blank" rel="noopener noreferrer" href="https://pro.loacg.com/"><span>ANTD PRO VUE</span></a> · <a target="_blank" rel="noopener noreferrer" href="https://antdv.com/docs/vue/introduce-cn/"><span>Ant Design of Vue</span></a></p>
    </div>
  </div>
</template>

<script>
import FooterCenter from './FooterCenter'

export default {
  name: 'Footer',
  components: {
    FooterCenter
  }
}
</script>
