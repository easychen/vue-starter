# Vue.js Starter

## What
Vue Starter是从Vue hackernews clone里边分离出来的、不带业务逻辑的公用部分，目的是作为新Vue项目的起始。

## 修改
添加了Bootstrap，清理掉了业务相关的代码。加上了jQuery。

## 使用

``` bash
npm install
# 开发:
npm run dev
# 生成:
npm run build
```

## PS

Vue手册上其实并没有太多关于真实应用应该如何组织代码的说明。

而Vue hackernews clone完整的整合了vue-route，还将组件直接分离成了独立的.vue的文件，在一个文件里边可以同时完成模板、脚本和样式的编写，默认配置了webpack的livereload，可以实时看到效果，非常方便。

美中不足的是里边有很多逻辑代码，所以我清理掉后作为自己新项目的起始基础。

在vue文件中写代码时，几乎完全遵循了标准vue组件的写法，但data属性是通过函数返回的，关于这点手册上有专门注明。

在页面切换过程中，如果要预处理数据，请去vue-route的文档里边寻找细节。

