# v9.0.0
## 2020-05-07
- 升级angular版本为9.0.0版本；

# v8.0.0
## 2020-03-28
- 升级Angular版本为8.0.0版本;
- 调整prismjs、perfect-scrollbar和jsoneditor等第三方组件的样式的引入方式；

# v7.0.0
## 2020-03-28
### ngx-libs
- ngx-shade:调整组件更新策略，优化性能；
- ngx-prismjs:优化性能；
- ngx-perfect-scrollbar:调整组件更新策略，优化性能；
- ngx-jsoneditor:调整组件更新策略，优化性能；

## 2019-07-10
### ngx-libs
- ngx-prismjs:修复无法使用，会报错的问题；
- ngx-prismjs:升级primsjs的版本，从v1.15.0-->1.16.0；

## 2019-05-06
### ngx-libs
- 调整导出方式；

## 2019-04-12
### ngx-libs
- ngx-jsoneditor:完成jsoneditor组件；
- ngx-perfect-scrollbar:调整部分样式class名称,命名规范化；
- 去除无用的模块引用；

## 2019-02-17
### ngx-libs
- ngx-perfect-scrollbar:完成perfect-scrollbar滚动条组件；

## 2019-02-16
### ngx-libs
- ngx-prismjs:修改指令中服务示例名称，提升代码可读性；
- ngx-perfect-scrollbar:package.json增加组件所需的依赖包配置；

## 2019-01-26
### ngx-libs
- ngx-prismjs:修复因代码注释导致无法编译的问题；

## 2019-01-24
### ngx-libs
- ngx-primejs:增加primejs代码高亮组件；

## 2019-01-20
### ngx-libs
- 修复引用NgxLibsModule后，无法以生产模式打包编译代码的问题；
- 优化组件模块的导出，实现组件模块对的按需引入加载，避免无用组件模块也引入导致最终编译的体积增大；

## 2018-12-09
### ngx-libs
- 初始化ngx-libs；
- ngx-shade:增加shade遮罩组件；
