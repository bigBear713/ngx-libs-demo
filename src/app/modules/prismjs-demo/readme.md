# ngxPrismjs指令：
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
### ngxPrismjs指令：高亮显示代码的指令，将其置于html元素中，将会把当前元素中的内容高亮显示；
- [ngLanguage] - string - 要以何种语言高亮显示当前内容，默认为javascript;
### NgxPrismjsService：提供高亮显示代码功能的服务
#### getPrism():any - 获取Prism的对象，可自行调用prismjs的相关方法；
##### 参数
- 
##### 返回值
- any - Prismjs的对象;
#### highlight(code: string, language: string, ?: any):string - 高亮显示代码；
##### 参数 
- code - string - 必填 - 要高亮显示的内;
- language - string - 必填 -  语言，用于设置以何种语言解析内容;
- grammar - any - 选填 - 语法，可不传。不传时，将自动根据指定解析的语言作为关键字，使用相应的语法;
##### 返回值
- string - 处理后的内容
#### highlightAll(async?: boolean, callback?: any):void - 高亮显示页面中所有内容；
##### 参数 
- async - boolean - 选填 - 见prismjs官方同名函数;
- callback - any - 选填 - 见prismjs官方同名函数;
##### 返回值
- void - 
#### highlightAllUnder(): void - 将容器内的内容全部高亮显示;
##### 参数 
- 
##### 返回值
- void - 
#### highlightElement(element: HTMLElement, async?: boolean, callback?: any):void - 将标签元素内的内容高亮显示.ngxPrism指令便是使用该方法实现相关功能;
##### 参数 
- element - HTMLElement - 必填 - 要高亮显示的标签元素；
- async - boolean - 选填 - 见prismjs官方同名函数;
- callback - any - 选填 - 见prismjs官方同名函数;
##### 返回值
- void - 

## 效果
![Image text](/src/assets/app/modules/prismjs-demo/img/effect.png)