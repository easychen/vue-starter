# Vue.js Starter

## What
Vue Starter是我从Vue hackerNews Clone里边分离出来的，目的是作为新的Vue项目的起始。

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
之所以从Vue hackerNews Clone扒出这个项目，是因为Vue手册上其实并没有太多关于真实应用应该如何组织代码的说明。而这个项目完整的整合了Vue-Route，还将组件直接分离成了独立的vue的文件，在一个文件里边可以同时完成模板、脚本和样式的编写，默认配置了WebPack的livereload，可以实时看到效果，非常方便。

在vue文件中写代码时，几乎遵循了标准vue组件的写法，但data属性是通过函数返回的，关于这点手册上有专门注明。

在页面切换过程中，如果要预处理数据，请去vue-route的文档里边寻找细节。

