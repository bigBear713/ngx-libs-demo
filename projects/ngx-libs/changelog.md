# v7.0.0
## 2019-01-20
### ngx-libs
- 修复引用NgxLibsModule后，无法以生产模式打包编译代码的问题（wangjx）；
- 优化组件模块的导出，实现组件模块对的按需引入加载，避免无用组件模块也引入导致最终编译的体积增大（wangjx）；

## 2018-12-09
### ngx-libs
- 初始化ngx-libs（wangjx）；
- 增加shade遮罩组件（wangjx）；