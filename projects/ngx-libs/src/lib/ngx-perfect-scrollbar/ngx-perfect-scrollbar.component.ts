import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    NgZone,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';

import { NgxPerfectScrollbarService } from './ngx-perfect-scrollbar.service';

@Component({
  selector: 'ngx-perfect-scrollbar',
  template: `
  <div class="ngx-perfect-scrollbar">
    <ng-content></ng-content>
  </div>`,
  styles: [`
  :host {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
  }

  .ngx-perfect-scrollbar {
      width: 100%;
      height: 100%;
      /** 在ie浏览器和Edge浏览器中，有时候会滚动条无法显示的异常，
       * 因为IE和Edge浏览器中默认将该属性设置为none，导致无法出现滚动条，
       * 通过手动设置该属性的值为auto可解决
       */
      -ms-overflow-style: auto;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxPerfectScrollbarComponent implements OnInit, AfterViewInit, OnDestroy {

  // 滚动条实例
  private _instance: any;

  set instance(instance: any) {
    this._instance = instance;
    this.ngInstanceChange.emit(instance);
  }

  get instance(): any {
    return this._instance;
  }

  @Output() ngInstanceChange = new EventEmitter<any>();
  // 配置信息
  private _ngOptions: Object = {};

  @Input() set ngOptions(options: Object) {
    if (!options) {
      options = this._ngOptions;
    }
    this._ngOptions = options;
    this.initPerfectScrollbar();
  }

  get ngOptions(): Object {
    return this._ngOptions;
  }
  // 刷新滚动条，避免某些情况下，
  // 竖直方向的滚动条在左侧
  @Input() set ngRefresh(refresh: boolean) {
    if (refresh) {
      if (this.instance) {
        this.instance.update();
      }
      this.ngRefreshChange.emit(false);
    }
  }

  @Output() ngRefreshChange = new EventEmitter<boolean>();

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone,
    private service: NgxPerfectScrollbarService
  ) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.initPerfectScrollbar();
  }

  ngOnDestroy() {
    this.service.destroyPerfectScrollbar(this.instance);
  }

  /** 初始化滚动条
   *
   *
   * @memberof NgxPerfectScrollbarComponent
   */
  initPerfectScrollbar(): void {
    this.ngZone.runOutsideAngular(() => {
      this.instance = this.service.initPerfectScrollbar(this.elementRef.nativeElement, this.ngOptions, this.instance);
    });
  }

  /** 浏览器窗口改变时，更新滚动条
   *
   *
   * @memberof NgxPerfectScrollbarComponent
   */
  @HostListener('window:resize') resizeWindow() {
    if (this.instance) {
      this.instance.update();
    }
  }

}
