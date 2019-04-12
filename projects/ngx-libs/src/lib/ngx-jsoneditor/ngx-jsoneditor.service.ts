import { Injectable } from '@angular/core';
import * as JSONEditor from 'jsoneditor/dist/jsoneditor.min.js';
import 'style-loader!jsoneditor/dist/jsoneditor.min.css';
import { NgxJsoneditorOptions } from './classes';

/** ngx-jsoneditor组件的功能服务
 *
 *
 * @export
 */
@Injectable({
  providedIn: 'root'
})
export class NgxJsoneditorService {

  constructor() { }

  /** 销毁jsoneditor的实例
   *
   *
   * @params {*} instance 编辑器实例
   * @memberof NgxJsoneditorService
   */
  destroyJsoneditor(instance: any): void {
    if (instance) {
      instance.destroy();
    }
  }

  /** 获取实例中的数据
   *
   *
   * @params {*} instance 编辑器实例
   * @returnses {Object}
   * @memberof NgxJsoneditorService
   */
  getData(instance: any): Object {
    return instance.get();
  }

  /** 初始化jsoneditor编辑器
   *
   *
   * @params {HTMLElement} container 要初始化的div元素
   * @params {NgxJsoneditorOptions} options 初始化配置
   * @returnses {any}
   * @memberof NgxJsoneditorService
   */
  initJsoneditor(container: HTMLElement, options: NgxJsoneditorOptions): any {
    return new JSONEditor(container, options);
  }

  /** 在jsoneditor实例中设置数据
   *
   *
   * @params {*} instance 要设置数据的jsoneditor实例
   * @params {Object} data 要设置的数据
   * @memberof NgxJsoneditorService
   */
  setData(instance: any, data: Object): void {
    instance.set(data);
  }

}
