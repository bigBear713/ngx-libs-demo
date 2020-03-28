import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Input,
    OnInit,
    Output
} from '@angular/core';

@Component({
  selector: 'ngx-shade',
  template: `
    <ng-content></ng-content>
    <div *ngIf="ngShow" class="ngx-shade" [ngStyle]="{'opacity':ngOpacity,'background-color':ngColor,'z-index':ngZIndex}"></div>
  `,
  styles: [`
    :host{
      position:relative;
      display: block;
      width: 100%;
      height: 100%;
    }

    .ngx-shade{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxShadeComponent implements OnInit {
  // 点击遮罩时是否自动隐藏
  @Input() ngClickAutoHide: boolean = false;
  // 遮罩颜色
  @Input() ngColor: string = '#000';
  // 透明度
  @Input() ngOpacity: number = 0.4;
  // 是否显示遮罩
  @Input() ngShow: boolean = false;
  // ngShow值改变时触发，用于向父组件传递ngShow改变后的值
  @Output() ngShowChange = new EventEmitter<boolean>();
  // 遮罩层级
  @Input() ngZIndex: number = 999;

  constructor() { }

  ngOnInit() {
  }

  /**  点击组件区域时触发
   *
   *
   * @params {*} $event 点击的event对象
   * @memberof NgxShadeComponent
   */
  @HostListener('click', ['$event']) ngOnClick($event) {
    if (this.ngClickAutoHide) {
      this.ngShow = false;
      this.ngShowChange.emit(this.ngShow);
    }
  }

}
