## 介绍
`nuomi-admin` 是基于 `nuomi` + `antd` 开发的一个简单的管理系统案例，可以方便对 `nuomi` 框架的使用和学习。

## 使用
```
git clone https://github.com/nuomijs/nuomi-admin.git my-project
cd my-project
yarn install
yarn start
```

## 目录说明

```
config   webpack配置
docs     项目文档
mocks    模拟请求
public   静态资源
scripts  构建脚本
src      项目源码
    assets       公共资源
    components   公共组件
    effects      公共业务
    routes       路由
        home     路由模块，这里只列出一个，其他模块都是这种格式
            components    模块组件
            effects       模块业务
            services      模块接口，可省略，统一使用公共接口
            index.js      模块入口
        index.js 路由模块统一入口
    services     公共接口
    utils        公共工具
    App.jsx      入口组件
    config.js    项目配置相关
    index.js     项目入口
```
