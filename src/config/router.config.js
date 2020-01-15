import Home from '@/views/Home'

const abpRouterMap = [
  {
    text: 'ABP 文档',
    enText: 'ABP Docs',
    path: 'Index'
  },
  {
    text: '入门',
    enText: 'Getting Started',
    items: [
      {
        text: '从启动模板开始',
        enText: 'From Startup Templates',
        items: [
          {
            text: 'ASP.NET Core MVC 模板',
            enText: 'Application with MVC (Razor Pages) UI',
            path: 'Getting-Started-AspNetCore-MVC-Template'
          },
          {
            text: 'Angular UI 模板',
            enText: 'Application with Angular UI',
            path: 'Getting-Started-Angular-Template'
          }
        ]
      },
      {
        text: '从空项目开始',
        enText: 'From Empty Projects',
        items: [
          {
            text: '使用ASP.NET Core Web Application',
            enText: 'With ASP.NET Core Web Application',
            path: 'Getting-Started-AspNetCore-Application'
          },
          {
            text: '使用Console Application',
            enText: 'With Console Application',
            path: 'Getting-Started-Console-Application'
          }
        ]
      }
    ]
  },
  {
    text: '教程',
    enText: 'Tutorials',
    items: [
      {
        text: '应用开发',
        enText: 'Application Development',
        items: [
          {
            text: '使用 ASP.NET Core MVC',
            enText: 'With ASP.NET Core MVC UI',
            path: 'Tutorials/AspNetCore-Mvc/Part-I'
          },
          {
            text: '使用 Angular UI',
            enText: 'With Angular UI',
            path: 'Tutorials/Angular/Part-I'
          }
        ]
      }
    ]
  },
  {
    text: 'CLI',
    enText: 'CLI',
    path: 'CLI'
  },
  {
    text: '基础知识',
    enText: 'Fundamentals',
    items: [
      {
        text: '配置',
        enText: 'Configuration',
        path: 'Configuration'
      },
      {
        text: 'Options',
        enText: 'Options',
        path: 'Options'
      },
      {
        text: '依赖注入',
        enText: 'Dependency Injection',
        path: 'Dependency-Injection',
        items: [
          {
            text: 'AutoFac 集成',
            enText: 'AutoFac Integration',
            path: 'Autofac-Integration'
          }
        ]
      },
      {
        text: '虚拟文件系统',
        enText: 'Virtual File System',
        path: 'Virtual-File-System'
      },
      {
        text: '本地化',
        enText: 'Localization',
        path: 'Localization'
      },
      {
        text: '异常处理',
        enText: 'Exception Handling',
        path: 'Exception-Handling'
      },
      {
        text: '验证',
        enText: 'Validation',
        path: 'Validation',
        items: [
          {
            text: 'FluentValidation集成',
            enText: 'FluentValidation Integration',
            path: 'FluentValidation'
          }
        ]
      },
      {
        text: '授权',
        enText: 'Authorization',
        path: 'Authorization'
      },
      {
        text: '缓存',
        enText: 'Caching',
        path: 'Caching'
      },
      {
        text: '审计',
        enText: 'Auditing'
      },
      {
        text: '设置管理',
        enText: 'Settings',
        path: 'Settings'
      }
    ]
  },
  {
    text: '事件',
    enText: 'Events',
    items: [
      {
        text: '本地 Event Bus',
        enText: 'Event Bus (local)'
      },
      {
        text: '分布式 Event Bus',
        enText: 'Distributed Event Bus',
        items: [
          {
            text: 'RabbitMQ 集成',
            enText: 'RabbitMQ Integration'
          }
        ]
      }
    ]
  },
  {
    text: '服务',
    enText: 'Services',
    items: [
      {
        text: '当前用户',
        enText: 'Current User',
        path: 'CurrentUser'
      },
      {
        text: '对象到对象映射',
        enText: 'Object to object mapping',
        path: 'Object-To-Object-Mapping'
      },
      {
        text: '对象序列化',
        enText: 'Object Serialization'
      },
      {
        text: 'JSON序列化',
        enText: 'JSON Serialization'
      },
      {
        text: '邮件',
        enText: 'Emailing'
      },
      {
        text: 'GUIDs',
        enText: 'GUIDs'
      },
      {
        text: '线程',
        enText: 'Threading'
      },
      {
        text: '定时',
        enText: 'Timing'
      }
    ]
  },
  {
    text: '多租户',
    enText: 'Multi Tenancy',
    path: 'Multi-Tenancy'
  },
  {
    text: '模块开发',
    enText: 'Module Development',
    items: [
      {
        text: '基础',
        enText: 'Basics',
        path: 'Module-Development-Basics'
      },
      {
        text: '模块插件',
        enText: 'Plug-In Modules'
      },
      {
        text: '最佳实践',
        enText: 'Best Practices',
        path: 'Best-Practices/Index'
      }
    ]
  },
  {
    text: '领域驱动设计',
    enText: 'Domain Driven Design',
    path: 'Domain-Driven-Design',
    items: [
      {
        text: '领域层',
        enText: 'Domain Layer',
        items: [
          {
            text: '实体&聚合根',
            enText: 'Entities & Aggregate Roots',
            path: 'Entities'
          },
          {
            text: '值对象',
            enText: 'Value Objects'
          },
          {
            text: '仓储',
            enText: 'Repositories',
            path: 'Repositories'
          },
          {
            text: '领域服务',
            enText: 'Domain Services'
          },
          {
            text: '规约',
            enText: 'Specifications'
          }
        ]
      },
      {
        text: '应用服务层',
        enText: 'Application Layer',
        items: [
          {
            text: '应用服务',
            enText: 'Application Services',
            path: 'Application-Services'
          },
          {
            text: '数据传输对象(DTO)',
            enText: 'Data Transfer Objects'
          },
          {
            text: '工作单元',
            enText: 'Unit Of Work'
          }
        ]
      }
    ]
  },
  {
    text: 'ASP.NET Core',
    enText: 'ASP.NET Core',
    items: [
      {
        text: 'API',
        enText: 'API',
        items: [
          {
            text: '自动API控制器',
            enText: 'Auto API Controllers',
            path: 'AspNetCore/Auto-API-Controllers'
          },
          {
            text: '动态C# API客户端',
            enText: 'Dynamic C# API Clients',
            path: 'AspNetCore/Dynamic-CSharp-API-Clients'
          }
        ]
      },
      {
        text: '用户界面',
        enText: 'User Interface',
        items: [
          {
            text: '客户端包管理',
            enText: 'Client Side Package Management',
            path: 'AspNetCore/Client-Side-Package-Management'
          },
          {
            text: '捆绑&压缩',
            enText: 'Bundling & Minification',
            path: 'AspNetCore/Bundling-Minification'
          },
          {
            text: '标签助手',
            enText: 'Tag Helpers',
            path: 'AspNetCore/Tag-Helpers/Index'
          },
          {
            text: '小部件(Widget)系统',
            enText: 'Widgets',
            path: 'AspNetCore/Widgets'
          },
          {
            text: '主题化',
            enText: 'Theming',
            path: 'AspNetCore/Theming'
          }
        ]
      }
    ]
  },
  {
    text: '数据访问',
    enText: 'Data Access',
    path: 'Data-Access',
    items: [
      {
        text: '连接字符串',
        enText: 'Connection Strings',
        path: 'Connection-Strings'
      },
      {
        text: '数据库集成',
        enText: 'Database Providers',
        items: [
          {
            text: 'Entity Framework Core 集成',
            enText: 'Entity Framework Core',
            path: 'Entity-Framework-Core',
            items: [
              {
                text: 'MySQL 集成',
                enText: 'Switch to MySQL',
                path: 'Entity-Framework-Core-MySQL'
              },
              {
                text: 'PostgreSQL 集成',
                enText: 'Switch to PostgreSQL',
                path: 'Entity-Framework-Core-PostgreSQL'
              },
              {
                text: 'SQLite 集成',
                enText: 'Switch to SQLite',
                path: 'Entity-Framework-Core-SQLite'
              },
              {
                text: '其他DBMS 集成',
                enText: 'Switch to another DBMS',
                path: 'Entity-Framework-Core-Other-DBMS'
              }
            ]
          },
          {
            text: 'MongoDB 集成',
            enText: 'MongoDB',
            path: 'MongoDB'
          },
          {
            text: 'Dapper 集成',
            enText: 'Dapper',
            path: 'Dapper'
          }
        ]
      }
    ]
  },
  {
    text: '后台服务',
    enText: 'Background',
    items: [
      {
        text: '后台作业',
        enText: 'Background Jobs',
        path: 'Background-Jobs',
        items: [
          {
            text: 'Hangfire 集成',
            enText: 'Hangfire Integration',
            path: 'Background-Jobs-Hangfire'
          },
          {
            text: 'RabbitMQ 集成',
            enText: 'RabbitMQ Integration',
            path: 'Background-Jobs-RabbitMq'
          }
        ]
      }
    ]
  },
  {
    text: '启动模板',
    enText: 'Startup Templates',
    path: 'Startup-Templates/Index',
    items: [
      {
        text: '应用',
        enText: 'Application',
        path: 'Startup-Templates/Application'
      },
      {
        text: '模块',
        enText: 'Module',
        path: 'Startup-Templates/Module'
      }
    ]
  },
  {
    text: '示例',
    enText: 'Samples',
    items: [
      {
        text: '微服务示例',
        enText: 'Microservice Demo',
        path: 'Samples/Microservice-Demo'
      }
    ]
  },
  {
    text: '应用模块',
    enText: 'Application Modules',
    path: 'Modules/Index'
  },
  {
    text: '微服务架构',
    enText: 'Microservice Architecture',
    path: 'Microservice-Architecture'
  },
  {
    text: '测试',
    enText: 'Testing'
  },
  {
    text: '每日构建',
    enText: 'Nightly Builds',
    path: 'Nightly-Builds'
  },
  {
    text: '贡献指南',
    enText: 'Contribution Guide',
    path: 'Contribution/Index'
  }
]

const docsRouterMap = [
  {
    title: '入门',
    enTitle: 'Introduction',
    children: [
      {
        title: '开始使用',
        enTitle: 'Getting Started',
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
  }
]

export { constantRouterMap, docsRouterMap, componentsRouterMap, abpRouterMap }
