# TeamLink

> A Vue.js project
## 项目结构

> 所有开发的源代码都在src文件夹下

``` bash
│
├── dist
│   └── ...         # 打包后的放到生产环境的文件
├── src
│   ├── main.js     # 入口JS文件
    ├── theme.css   # 公共样式
    ├── App.vue     # 根组件
    ├── api
    │   └── ...     # 抽取出API请求
    ├── assets
    │   └── ...     # 静态文件
    ├── axios
    │   └── ...     # 封装AXIOS
    ├── components
    │   └── ...     # 抽取复用类组件
    ├── plugins
    │   └── ...     # 插件
    ├── router
    │   └── ...     # 路由封装
    ├── views
    │   └── ...     # 页面
    └── store
        └── ...     # 状态管理
```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
