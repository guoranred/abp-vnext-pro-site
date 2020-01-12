import Home from '@/views/Home'

const abpRouterMap = [
  {
    text: 'ABP 文档',
    path: 'Index'
  },
  {
    text: '入门',
    items: [
      {
        text: '从启动模板开始',
        items: [
          {
            text: 'ASP.NET Core MVC 模板',
            path: 'Getting-Started-AspNetCore-MVC-Template'
          }
        ]
      },
      {
        text: '从空项目开始',
        items: [
          {
            text: '使用ASP.NET Core Web Application',
            path: 'Getting-Started-AspNetCore-Application'
          },
          {
            text: '使用Console Application',
            path: 'Getting-Started-Console-Application'
          }
        ]
      }
    ]
  },
  {
    text: '教程',
    items: [
      {
        text: '应用开发',
        items: [
          {
            text: '使用 ASP.NET Core MVC',
            path: 'Tutorials/AspNetCore-Mvc/Part-I'
          }
        ]
      }
    ]
  },
  {
    text: 'CLI',
    path: 'CLI'
  },
  {
    text: '基础知识',
    items: [
      {
        text: '配置',
        path: 'Configuration'
      },
      {
        text: '依赖注入',
        path: 'Dependency-Injection',
        items: [
          {
            text: 'AutoFac 集成',
            path: 'Autofac-Integration'
          }
        ]
      },
      {
        text: '虚拟文件系统',
        path: 'Virtual-File-System'
      },
      {
        text: '本地化',
        path: 'Localization'
      },
      {
        text: '异常处理',
        path: 'Exception-Handling'
      },
      {
        text: '验证',
        path: 'Validation',
        items: [
          {
            text: 'FluentValidation集成',
            path: 'FluentValidation'
          }
        ]
      },
      {
        text: '授权'
      },
      {
        text: '缓存',
        path: 'Caching'
      },
      {
        text: '审计'
      },
      {
        text: '设置管理',
        path: 'Settings'
      }
    ]
  },
  {
    text: '事件',
    items: [
      {
        text: '本地 Event Bus'
      },
      {
        text: '分布式 Event Bus',
        items: [
          {
            text: 'RabbitMQ 集成'
          }
        ]
      }
    ]
  },
  {
    text: '服务',
    items: [
      {
        text: '当前用户',
        path: 'CurrentUser'
      },
      {
        text: '对象到对象映射',
        path: 'Object-To-Object-Mapping'

      },
      {
        text: 'JSON序列化'
      },
      {
        text: '邮件'
      },
      {
        text: 'GUIDs'
      },
      {
        text: '线程'
      },
      {
        text: '定时'
      }
    ]
  },
  {
    text: '多租户',
    path: 'Multi-Tenancy'
  },
  {
    text: '模块开发',
    items: [
      {
        text: '基础',
        path: 'Module-Development-Basics'
      },
      {
        text: '模块插件'
      },
      {
        text: '最佳实践',
        path: 'Best-Practices/Index'
      }
    ]
  },
  {
    text: '领域驱动设计',
    path: 'Domain-Driven-Design',
    items: [
      {
        text: '领域层',
        items: [
          {
            text: '实体&聚合根',
            path: 'Entities'
          },
          {
            text: '值对象'
          },
          {
            text: '仓储',
            path: 'Repositories'
          },
          {
            text: '领域服务'
          },
          {
            text: '规约'
          }
        ]
      },
      {
        text: '应用服务层',
        items: [
          {
            text: '应用服务',
            path: 'Application-Services'
          },
          {
            text: '数据传输对象(DTO)'
          },
          {
            text: '工作单元'
          }
        ]
      }
    ]
  },
  {
    text: 'ASP.NET Core',
    items: [
      {
        text: 'API',
        items: [
          {
            text: '自动API控制器',
            path: 'AspNetCore/Auto-API-Controllers'
          },
          {
            text: '动态C# API客户端',
            path: 'AspNetCore/Dynamic-CSharp-API-Clients'
          }
        ]
      },
      {
        text: '用户界面',
        items: [
          {
            text: '客户端包管理',
            path: 'AspNetCore/Client-Side-Package-Management'
          },
          {
            text: '捆绑&压缩',
            path: 'AspNetCore/Bundling-Minification'
          },
          {
            text: 'Tag Helpers',
            path: 'AspNetCore/Tag-Helpers/Index'
          },
          {
            text: '仪表板和小部件(Widget)系统',
            path: 'AspNetCore/Widgets'
          },
          {
            text: '主题化',
            path: 'AspNetCore/Theming'
          }
        ]
      }
    ]
  },
  {
    text: '数据访问',
    path: 'Data-Access',
    items: [
      {
        text: 'Entity Framework Core 集成',
        path: 'Entity-Framework-Core',
        items: [
          {
            text: 'PostgreSQL 集成',
            path: 'Entity-Framework-Core-PostgreSQL'
          }
        ]
      },
      {
        text: 'MongoDB 集成',
        path: 'MongoDB'
      },
      {
        text: 'Dapper 集成',
        path: 'Dapper'
      }
    ]
  },
  {
    text: '后台服务',
    items: [
      {
        text: '后台作业',
        path: 'Background-Jobs',
        items: [
          {
            text: 'Hangfire 集成',
            path: 'Background-Jobs-Hangfire'
          },
          {
            text: 'RabbitMQ 集成',
            path: 'Background-Jobs-RabbitMq'
          }
        ]
      }
    ]
  },
  {
    text: '示例',
    items: [
      {
        text: '微服务示例',
        path: 'Samples/Microservice-Demo'
      }
    ]
  },
  {
    text: '应用模块',
    path: 'Modules/Index'
  },
  {
    text: '微服务架构',
    path: 'Microservice-Architecture'
  },
  {
    text: '测试'
  },
  {
    text: '每日构建',
    path: 'Nightly-Builds'
  },
  {
    text: '贡献指南',
    path: 'Contribution/Index'
  }
]

const docsRouterMap = [
  {
    title: '入门',
    enTitle: 'Introduction',
    url: 'getting-started'
  },
  {
    title: '路由和菜单',
    enTitle: 'Router and Nav',
    url: 'router-and-nav'
  },
  {
    title: '入门',
    enTitle: 'Introduction',
    children: [
      {
        title: '开始使用',
        enTitle: 'Getting Started',
        // url: 'getting-started'
        children: [
          {
            title: '路由和菜单',
            enTitle: 'Router and Nav',
            url: 'router-and-nav'
          },
          {
            title: '布局',
            enTitle: 'Layout',
            url: 'layout'
          }
        ]
      },
      {
        title: '路由和菜单',
        enTitle: 'Router and Nav',
        url: 'router-and-nav'
      },
      {
        title: '布局',
        enTitle: 'Layout',
        url: 'layout'
      },
      {
        title: '新增页面',
        enTitle: 'New Page',
        url: 'new-page'
      },
      {
        title: '新增业务组件',
        enTitle: 'New Component',
        url: 'new-component'
      },
      {
        title: '样式',
        enTitle: 'Style',
        url: 'style'
      },
      {
        title: '和服务端交互',
        enTitle: 'Communicate with Server',
        url: 'server'
      },
      {
        title: '引入外部模块',
        enTitle: 'Import Module',
        url: 'import'
      },
      {
        title: '构建和发布',
        enTitle: 'Build & Deploy',
        url: 'deploy'
      }
    ]
  },
  {
    title: '进阶',
    enTitle: 'Advanced',
    children: [
      {
        title: '图表',
        enTitle: 'Charts',
        url: 'graph'
      },
      {
        title: '业务图标',
        enTitle: 'BIZ Icon',
        url: 'biz-icon'
      },
      {
        title: '国际化',
        enTitle: 'i18n',
        url: 'i18n'
      },
      {
        title: '更换主题',
        enTitle: 'Theme',
        url: 'theme'
      },
      {
        title: '错误处理',
        enTitle: 'Error Handle',
        url: 'error-handle'
      },
      {
        title: '权限管理',
        enTitle: 'Authority Management',
        url: 'authority-management'
      },
      {
        title: '去除权限控制',
        enTitle: 'Remove Authority',
        url: 'remove-authority-management'
      }
    ]
  },
  {
    title: '其他',
    enTitle: 'Other',
    children: [
      {
        title: '更新日志',
        enTitle: 'ChangeLog',
        url: 'changelog'
      },
      {
        title: '常见问题',
        enTitle: 'FAQ',
        url: 'faq'
      },
      {
        title: '设计资源',
        enTitle: 'Design Kit',
        url: 'resource'
      }
    ]
  }
]

const componentsRouterMap = [
  {
    title: 'AvatarList',
    cnTitle: '用户头像列表',
    url: 'avatar-list'
  },
  {
    title: 'Charts',
    cnTitle: '图表',
    url: 'charts'
  },
  {
    title: 'CountDown',
    cnTitle: '倒计时',
    url: 'count-down'
  },
  {
    title: 'FooterToolbar',
    cnTitle: '底部工具栏',
    url: 'footer-toolbar'
  },
  {
    title: 'DescriptionList',
    cnTitle: '描述文本',
    url: 'description-list'
  },
  {
    title: 'NumberInfo',
    cnTitle: '数据文本',
    url: 'number-info'
  },
  {
    title: 'Ellipsis',
    cnTitle: '文本自动省略号',
    url: 'ellipsis'
  },
  {
    title: 'Result',
    cnTitle: '处理结果',
    url: 'result'
  },
  {
    title: 'Trend',
    cnTitle: '趋势标记',
    url: 'trend'
  },
  {
    title: 'Table',
    cnTitle: '数据表格',
    url: 's-table'
  },
  {
    title: 'IconSelector',
    cnTitle: '图标选择器',
    url: 'icon-selector'
  },
  {
    title: 'TwoStepCaptcha',
    cnTitle: '两步验证 FMA',
    url: 'two-step-captcha'
  },
  {
    title: 'ActionPermission',
    cnTitle: '操作权限',
    url: 'action-permission'
  }
]

const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/abp/:page?',
    name: 'abp',
    // route level code-splitting
    // this generates a separate chunk (abp.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'abp' */ '@/views/Abp')
  },
  {
    path: '/docs/:page?',
    name: 'docs',
    // route level code-splitting
    // this generates a separate chunk (docs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'docs' */ '@/views/Docs')
  },
  {
    path: '/components/:page?',
    name: 'components',
    // route level code-splitting
    // this generates a separate chunk (components.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'components' */ '@/views/Components')
  },
  {
    path: 'https://github.com/sendya/ant-design-pro-vue',
    name: 'github_repo_url',
    meta: { target: '_blank' }
  }
]

export { constantRouterMap, docsRouterMap, componentsRouterMap, abpRouterMap }
