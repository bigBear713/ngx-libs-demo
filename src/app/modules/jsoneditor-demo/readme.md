# ngx-jsoneditor组件：
## 说明
- 这是一个基于jsoneditor封装的组件，实现显示、编辑json数据的功能；
- 使用时，需要引入模块“NgxLibsModule”或“NgxJsoneditorModule”.引入“NgxLibsModule”时，可使用ngx-libs中的任何一种组件；引入“NgxJsoneditorModule”时，将只能使用当前组件；
- 使用时，直接引入相应的模块，在相应的位置使用该组件，无需再引入jsoneditor的js文件和css文件；

## 使用示例
`<ngx-jsoneditor></ngx-jsoneditor>`

## API接口：
### ngx-jsoneditor组件：实现显示、编辑json数据的功能；
- [ngData] - Object - 要显示、编辑的json数据,支持双向绑定写法[(ngData)]="data"；
- (ngDataChange) - EventEmitter<Object> - 获取当前编辑器中的json数据；
- [ngOptions] - NgxJsoneditorOptions - jsoneditor的配置信息，具体配置见官方说明（https://github.com/josdejong/jsoneditor.git）;
- (ngJsoneditorInstanceChange) - EventEmitter<Object> - 获取当前json编辑器实例；
### NGX_JSONEDITOR_MODE:jsoneditor支持的mode
- CODE - 'code' - 设置mode为“code”；
- TREE - 'tree' - 设置mode为“tree”；
- TEXT - 'text' - 设置mode为“text”；
- VIEW - 'view' - 设置mode为“view”；
- FORM - 'form' - 设置mode为“form”；
### NgxJsoneditorMode:jsoneditor配置中的mode属性支持的值
### NgxJsoneditorOptions:jsoneditor的配置信息
- mode - NgxJsoneditorMode' - 设置jsoneditor的模式；
- search - boolean - 是否含有输入框；
- onChange - void - 当编辑器中的值改变时触发函数；
### NgxJsoneditorService：提供ngx-jsoneditor组件的功能服务
#### destroyJsoneditor(instance: any):void - 销毁jsoneditor的实例；
##### 参数
- instance - any - 必填 - 编辑器实例;
##### 返回值
- void - 
#### getData(instance: any):Object - 获取实例中的数据；
##### 参数
- instance - any - 必填 - 编辑器实例;
##### 返回值
- Object - 从编辑器实例中获取的json值
#### initJsoneditor(container: HTMLElement, options: NgxJsoneditorOptions):any - 初始化jsoneditor编辑器；
##### 参数
- container - HTMLElement - 必填 - 要初始化的div元素;
- options - NgxJsoneditorOptions - 必填 - 配置;
##### 返回值
- any - 滚动条实例;
#### setData(instance: any, data: Object): void - 在jsoneditor实例中设置数据；
##### 参数
- instance - any - 必填 - 要设置数据的jsoneditor实例;
- data - Object - 必填 - 要设置的数据;
##### 返回值
- void - ;

## 效果
![Image text](/src/assets/app/modules/jsoneditor-demo/img/effect.png)