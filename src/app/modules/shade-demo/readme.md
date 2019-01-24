# ngx-shade组件：
## 说明
- 这是一个遮罩组件，实现在指定区域内显示遮罩。显示遮罩时，边无法对区域内的内容进行操作。
- 使用时，需要引入模块“NgxLibsModule”或“NgxShadeModule”.引入“NgxLibsModule”时，可使用ngx-libs中的任何一种组件；引入“NgxShadeModule”时，将只能使用当前组件；

## 使用示例
`<ngx-shade>// 这是要显示遮罩的内容... </ngx-shade>`

## API接口：
- [ngShow] - boolean - 控制是否显示遮罩。true表示显示，false表示不显示.支持双向绑定写法[(ngShow)]="show";
- (ngShowChange) - EventEmitter - 获取当前是否显示遮罩的状态。获取的值为true时，表示内容上会显示遮罩；获取的值为false时，表示内容上没有显示遮罩；
- [ngClickAutoHide] - boolean - 点击遮罩时是否自动隐藏。true时表示自动隐藏，false时表示不自动隐藏；
- [ngColor] - string - 遮罩的颜色，支持以下类型的值：'black','#000','rgb(0,0,0)','rgba(0,0,0,1)';
- [ngOpacity] - number - 遮罩的透明度，值为0~1之间；
- [ngZIndex] - number - 遮罩层级。

## 效果
![Image text](/src/assets/app/modules/shade-demo/img/effect.png)