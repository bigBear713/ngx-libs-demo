import * as _ from 'lodash/lodash.min.js';

import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';

import { NgxJsoneditorOptions } from './classes';
import { NgxJsoneditorService } from './ngx-jsoneditor.service';

@Component({
  selector: 'ngx-jsoneditor',
  template: `<div class="ngx-jsoneditor"></div>`,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;

      ::ng-deep {
        * {
          box-sizing: border-box;
        }
      }
    }

    .ngx-jsoneditor {
      width: 100%;
      height: 100%;

      ::ng-deep {
        div.jsoneditor-tree {
          div.jsoneditor-tree-inner {
            padding-bottom: 0;
          }
        }

        table.jsoneditor-tree {
          margin: 0;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxJsoneditorComponent implements OnInit, OnDestroy {
  // 用户定义的配置信息
  private customOptions: NgxJsoneditorOptions = {
    onChange: null,
  };
  // jsoneditor编辑器的实例
  private _jsoneditorInstance: any;

  private set jsoneditorInstance(jsoneditorInstance: any) {
    if (!jsoneditorInstance) {
      this.service.destroyJsoneditor(this._jsoneditorInstance);
    }
    this._jsoneditorInstance = jsoneditorInstance;
    this.ngJsoneditorInstanceChange.emit(jsoneditorInstance);
  }

  private get jsoneditorInstance(): any {
    return this._jsoneditorInstance;
  }
  // 数据
  private _ngData: Object;

  @Input() set ngData(data: Object) {
    if (this._ngData !== data) {
      this._ngData = data;
    }
  }

  get ngData(): Object {
    return this._ngData;
  }

  @Output() ngDataChange = new EventEmitter<Object>();
  // 配置信息
  private _ngOptions: NgxJsoneditorOptions = new NgxJsoneditorOptions();

  @Input() set ngOptions(options: NgxJsoneditorOptions) {
    this._ngOptions = options;
    if (options) {
      if (options.onChange && options.onChange !== this.onChange) {
        this.customOptions.onChange = options.onChange;
      }
      options.onChange = this.onChange;
    } else {
      options = {
        'onChange': this.onChange
      };
    }
    this.initJsoneditor(options);
  }

  get ngOptions(): NgxJsoneditorOptions {
    return this._ngOptions;
  }

  @Output() ngJsoneditorInstanceChange = new EventEmitter<Object>();

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone,
    private service: NgxJsoneditorService,
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.jsoneditorInstance = null;
  }

  /** 获取数据
   *
   *
   * @returnses {Promise<any>}
   * @memberof NgxJsoneditorComponent
   */
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ngZone.runOutsideAngular(() => {
        const result = {
          isValid: false,
          value: null
        };
        if (this.jsoneditorInstance) {
          let jsonData = null;
          let isValid;
          try {
            jsonData = this.service.getData(this.jsoneditorInstance);
            isValid = true;
          } catch (e) {
            isValid = false;
          }
          result.isValid = isValid;
          result.value = jsonData;
        }
        resolve(result);
      });
    });
  }

  /** 初始化jsoneditor编辑其
   *
   *
   * @params {NgxJsoneditorOptions} options 配置信息
   * @memberof NgxJsoneditorComponent
   */
  initJsoneditor(options: NgxJsoneditorOptions): void {
    this.ngZone.runOutsideAngular(() => {
      // 初始化前先销毁原来的实例
      this.jsoneditorInstance = null;
      const container = this.elementRef.nativeElement.children[0];
      this.jsoneditorInstance = this.service.initJsoneditor(container, options);
      if (this.ngData) {
        this.setData(this._ngData);
      }
    });
  }

  /** 当内容改变时触发的函数
   *
   *
   * @memberof NgxJsoneditorComponent
   */
  onChange = () => {
    this.ngZone.runOutsideAngular(() => {
      // 如果用户有自己定义onChange事件，
      // 那么这时候就要执行一下
      if (this.customOptions.onChange) {
        this.customOptions.onChange();
      }
      try {
        this.getData().then(jsonData => {
          const isValid = jsonData.isValid;
          if (isValid) {
            this.ngDataChange.emit(jsonData.value);
          }
        });
      } catch (e) {
        // console.log(e);
        this.ngDataChange.emit(null);
      }
    });
  }

  /** 设置jsoneditor中的json数据
   *
   *
   * @params {Object} data 要设置的数据
   * @memberof NgxJsoneditorComponent
   */
  setData(data: Object): void {
    this.ngZone.runOutsideAngular(() => {
      if (!data) {
        data = {};
        this.ngDataChange.emit(data);
      }
      this.getData().then(jsonData => {
        if (jsonData.isValid && !_.isEqual(jsonData.value, data)) {
          if (!this.jsoneditorInstance) {
            this.initJsoneditor(this.ngOptions);
          }
          this.service.setData(this.jsoneditorInstance, data);
        }
      });
    });
  }

}
