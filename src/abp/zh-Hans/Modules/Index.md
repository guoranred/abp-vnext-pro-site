# 应用程序模块

ABP是一个 **模块化的应用程序框架** 由十多个 **nuget packages** 组成. 它提供了一个完整的基础设施来构建你自己的应用程序模块,这些模块包含实体,服务,数据库集成,API,UI组件等.

**有两种类型的模块.** 它们没有任何结构上的差异,只是按照功能和目地分类:

* [**框架模块**](https://github.com/abpframework/abp/tree/master/framework/src): 这些是 **框架的核心模块**,像缓存,邮件,主题,安全性,序列化,验证,Ef Core集成,MongoDB集成...等等. 它们没有应用程序/业务功能,但通过提供通用基础架构,集成和抽象会使你的日常开发更加容易.
* [**应用程序模块**](https://github.com/abpframework/abp/tree/master/modules): 这些模块是实现特定的应用程序/业务功能,像 博客, 文档管理, 身份管理, 租户管理... 等等. 它是通常有自己的实体,服务,API和UI组件.

## 开源的应用程序模块

有一些由ABP社区开发和维护的 **开源免费** 的应用程序模块:

* **Account**: 用于用户登录/注册应用程序.
* **Audit Logging**: 用于将审计日志持久化到数据库.
* [**Background Jobs**](Modules/Background-Jobs.md): 用于在使用默认后台作业管理器时保存后台作业.
* **Blogging**: 用于创建精美的博客. ABP的[博客](https://abp.io/blog/abp/) 就使用了此模块.
* [**Docs**](Modules/Docs.md): 用于创建技术文档页面. ABP的[文档](https://abp.io/documents/) 就使用了此模块.
* **Identity**: 用于管理角色,用户和他们的权限.
* [**Identity Server**](Modules/IdentityServer.md): 集成了IdentityServer4.
* [**Permission Management**](Modules/Permission-Management.md): 用于保存权限.
* [**Setting Management**](Modules/Setting-Management.md): 用于保存设置.
* **Tenant Management**: 用于管理[多租户](../Multi-Tenancy.md)应用程序的租户.
* **Users**: 用于抽象用户, 因此其他模块可以依赖此模块而不是Identity模块.

模块化文档正在编写中. 请参阅[这个仓库](https://github.com/abpframework/abp/tree/master/modules)获取所有模块的源代码.