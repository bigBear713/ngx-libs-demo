# ngx-shade组件：
## 说明
- 这是一个代码高亮组件，实现将指定区域内的代码高亮显示。
- 使用时，需要引入模块“NgxLibsModule”或“NgxPrismjsModule”.引入“NgxLibsModule”时，可使用ngx-libs中的任何一种组件；引入“NgxPrismjsModule”时，将只能使用当前组件；

## 使用示例
- `<span ngxPrismjs ngLanguage="javascript">// 这是要高亮显示的内容... </span>`
- `<div ngxPrismjs ngLanguage="javascript">// 这是要高亮显示的内容... </div>`
- `<code ngxPrismjs ngLanguage="javascript">// 这是要高亮显示的内容... </code>`
- `<pre ngxPrismjs ngLanguage="javascript">// 这是要高亮显示的内容... </pre>`
- `<pre><code ngxPrismjs ngLanguage="javascript">// 这是要高亮显示的内容... </code></pre>`
- ...

## API接口：
- ngxPrismjs - any - 高亮显示的指令，将其置于html元素中，将会把当前元素中的内容高亮显示；
- [ngLanguage] - string - 要以何种语言高亮显示当前内容，默认为javascript;

## 效果
![Image text](/src/assets/app/modules/prismjs-demo/img/effect.png)