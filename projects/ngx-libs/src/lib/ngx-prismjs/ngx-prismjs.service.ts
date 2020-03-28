import Prism from 'prismjs';
// 目前这种css引入方式已经被angualr官方禁用，所以只能开发者自己在angular.json中引用，或者所需的地方引入
// import 'style-loader!prismjs/themes/prism.css';

/** 核心 */
// import 'prismjs/components/prism-core.min';
/** 以下内容的引入顺序是有一定有要求对的。
 * 大部分引入需在继承的文件后面。
 * 但是也有小部分以这种方式引入会有问题。
 * 具体怎么引入后续再查查相关资料
 */
/** 下面的文件适用于各种场景，但是很多时候不用那么多 */
/** 最好还是让开发者自己引入所需的文件 */
/**  */
/**  */
import 'prismjs/components/prism-clike.min';
// -----------//
import 'prismjs/components/prism-c.min';
import 'prismjs/components/prism-cpp.min';
import 'prismjs/components/prism-objectivec.min';
import 'prismjs/components/prism-opencl.min';

import 'prismjs/components/prism-arduino.min';
import 'prismjs/components/prism-bison.min';
// -----------//
import 'prismjs/components/prism-ruby.min';
import 'prismjs/components/prism-crystal.min';
import 'prismjs/components/prism-erb.min';
// -----------//
import 'prismjs/components/prism-csharp.min';
import 'prismjs/components/prism-fsharp.min';

import 'prismjs/components/prism-d.min';

import 'prismjs/components/prism-dart.min';

import 'prismjs/components/prism-glsl.min';

import 'prismjs/components/prism-go.min';

import 'prismjs/components/prism-groovy.min';

import 'prismjs/components/prism-haxe.min';

import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-scala.min';

import 'prismjs/components/prism-jolie.min';

import 'prismjs/components/prism-kotlin.min';

import 'prismjs/components/prism-nginx.min';

import 'prismjs/components/prism-php.min';
import 'prismjs/components/prism-php-extras.min';

import 'prismjs/components/prism-processing.min';

import 'prismjs/components/prism-protobuf.min';

import 'prismjs/components/prism-qore.min';

import 'prismjs/components/prism-reason.min';

import 'prismjs/components/prism-swift.min';

import 'prismjs/components/prism-tt2.min';

// ---------//
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/components/prism-typescript.min';
// ------------//
import 'prismjs/components/prism-actionscript.min';

import 'prismjs/components/prism-coffeescript.min';

import 'prismjs/components/prism-flow.min';

import 'prismjs/components/prism-n4js.min';



/**  */
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-css-extras.min';
import 'prismjs/components/prism-less.min';
import 'prismjs/components/prism-sass.min';
import 'prismjs/components/prism-scss.min';

/**  */
// -----------/

import 'prismjs/components/prism-markup.min';
// ------------//
import 'prismjs/components/prism-aspnet.min';

import 'prismjs/components/prism-jsx.min';

import 'prismjs/components/prism-markdown.min';

import 'prismjs/components/prism-parser.min';

import 'prismjs/components/prism-textile.min';

import 'prismjs/components/prism-velocity.min';

import 'prismjs/components/prism-wiki.min';

import 'prismjs/components/prism-xeora.min';

import 'prismjs/components/prism-xquery.min';

/**  */
import 'prismjs/components/prism-sql.min';
import 'prismjs/components/prism-plsql.min';


/**  */

/**  */

import 'prismjs/components/prism-abap.min';
import 'prismjs/components/prism-ada.min';
import 'prismjs/components/prism-apacheconf.min';
import 'prismjs/components/prism-apl.min';
import 'prismjs/components/prism-applescript.min';
import 'prismjs/components/prism-arff.min';
import 'prismjs/components/prism-asciidoc.min';
import 'prismjs/components/prism-asm6502.min';
import 'prismjs/components/prism-autohotkey.min';
import 'prismjs/components/prism-autoit.min';
import 'prismjs/components/prism-bash.min';

import 'prismjs/components/prism-basic.min';
import 'prismjs/components/prism-vbnet.min';

import 'prismjs/components/prism-batch.min';
import 'prismjs/components/prism-brainfuck.min';
import 'prismjs/components/prism-bro.min';
import 'prismjs/components/prism-clojure.min';
import 'prismjs/components/prism-csp.min';
import 'prismjs/components/prism-diff.min';
// import 'prismjs/components/prism-django.min';
import 'prismjs/components/prism-docker.min';
import 'prismjs/components/prism-eiffel.min';
import 'prismjs/components/prism-elixir.min';
import 'prismjs/components/prism-elm.min';
import 'prismjs/components/prism-erlang.min';
import 'prismjs/components/prism-fortran.min';
import 'prismjs/components/prism-gedcom.min';
import 'prismjs/components/prism-gherkin.min';
import 'prismjs/components/prism-git.min';
import 'prismjs/components/prism-graphql.min';
import 'prismjs/components/prism-haml.min';
import 'prismjs/components/prism-handlebars.min';
import 'prismjs/components/prism-haskell.min';
import 'prismjs/components/prism-hpkp.min';
import 'prismjs/components/prism-hsts.min';
import 'prismjs/components/prism-http.min';
import 'prismjs/components/prism-ichigojam.min';
import 'prismjs/components/prism-icon.min';
import 'prismjs/components/prism-inform7.min';
import 'prismjs/components/prism-ini.min';
import 'prismjs/components/prism-io.min';
import 'prismjs/components/prism-j.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-julia.min';
import 'prismjs/components/prism-keyman.min';
import 'prismjs/components/prism-latex.min';
import 'prismjs/components/prism-liquid.min';
import 'prismjs/components/prism-lisp.min';
import 'prismjs/components/prism-livescript.min';
import 'prismjs/components/prism-lolcode.min';
import 'prismjs/components/prism-lua.min';
import 'prismjs/components/prism-makefile.min';
import 'prismjs/components/prism-markup-templating.min';
import 'prismjs/components/prism-matlab.min';
import 'prismjs/components/prism-mel.min';
import 'prismjs/components/prism-mizar.min';
import 'prismjs/components/prism-monkey.min';
import 'prismjs/components/prism-nasm.min';
import 'prismjs/components/prism-nim.min';
import 'prismjs/components/prism-nix.min';
import 'prismjs/components/prism-nsis.min';
import 'prismjs/components/prism-ocaml.min';
import 'prismjs/components/prism-oz.min';
import 'prismjs/components/prism-parigp.min';
import 'prismjs/components/prism-pascal.min';
import 'prismjs/components/prism-perl.min';
import 'prismjs/components/prism-powershell.min';
import 'prismjs/components/prism-prolog.min';
import 'prismjs/components/prism-properties.min';
import 'prismjs/components/prism-pug.min';
import 'prismjs/components/prism-puppet.min';
import 'prismjs/components/prism-pure.min';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-q.min';
import 'prismjs/components/prism-r.min';
import 'prismjs/components/prism-renpy.min';
import 'prismjs/components/prism-rest.min';
import 'prismjs/components/prism-rip.min';
import 'prismjs/components/prism-roboconf.min';
import 'prismjs/components/prism-rust.min';
import 'prismjs/components/prism-sas.min';
import 'prismjs/components/prism-scheme.min';
import 'prismjs/components/prism-smalltalk.min';
import 'prismjs/components/prism-smarty.min';
import 'prismjs/components/prism-soy.min';
import 'prismjs/components/prism-stylus.min';
import 'prismjs/components/prism-tap.min';
import 'prismjs/components/prism-tcl.min';
import 'prismjs/components/prism-twig.min';
import 'prismjs/components/prism-verilog.min';
import 'prismjs/components/prism-vhdl.min';
import 'prismjs/components/prism-vim.min';
import 'prismjs/components/prism-visual-basic.min';
import 'prismjs/components/prism-wasm.min';
import 'prismjs/components/prism-xojo.min';
import 'prismjs/components/prism-yaml.min';
import 'prismjs/components/prism-django.min';

import {
  Injectable,
  NgZone
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxPrismjsService {

  constructor(
    private ngZone: NgZone,
  ) { }

  /** 获取Prism对象
   *
   *
   * @returnses {*}
   * @memberof NgxPrismjsService
   */
  getPrism(): any {
    return Prism;
  }

  /** 高亮显示代码
   *
   *
   * @params {string} code 要高亮的内容
   * @params {string} language 指定解析的语言
   * @params {*} [grammar] 语法。可不传。不传时，将自动根据指定解析的语言作为关键字，使用相应的语法
   * @returnses {string} 经过处理后的内容
   * @memberof NgxPrismjsService
   */
  highlight(code: string, language: string, grammar?: any): string {
    if (!grammar) {
      grammar = Prism.languages[language];
    }
    return Prism.highlight(code, grammar, language);
  }

  /** 高亮显示页面中所有内容
   *
   *
   * @params {boolean} [async]
   * @params {*} [callback]
   * @memberof NgxPrismjsService
   */
  highlightAll(async?: boolean, callback?: any): void {
    this.ngZone.runOutsideAngular(() => {
      Prism.highlightAll(async, callback);
    });
  }

  /** 将容器内的内容全部高亮显示
   *
   *
   * @params {HTMLElement} container
   * @params {boolean} [async]
   * @params {*} [callback]
   * @memberof NgxPrismjsService
   */
  highlightAllUnder(container: HTMLElement, async?: boolean, callback?: any): void {
    this.ngZone.runOutsideAngular(() => {
      Prism.highlightAllUnder(container, async, callback);
    });
  }

  /** 将标签元素内的内容高亮显示
   *
   *
   * @params {HTMLElement} element 要高亮的元素
   * @params {boolean} [async] 是否异步
   * @params {*} [callback] 回调函数
   * @memberof NgxPrismjsService
   */
  highlightElement(element: HTMLElement, async?: boolean, callback?: any): void {
    this.ngZone.runOutsideAngular(() => {
      Prism.highlightElement(element, async, callback);
    });
  }

}
