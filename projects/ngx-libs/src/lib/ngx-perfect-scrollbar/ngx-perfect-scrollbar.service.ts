import { Injectable, NgZone } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import 'style-loader!perfect-scrollbar/css/perfect-scrollbar.css';
import { SCROLL_DIRECTION } from './classes';

/** ngx-perfect-scrollbar组件的功能服务。
 * 其中部分方法的实现参考了zefoy大神的代码（https://github.com/zefoy/ngx-perfect-scrollbar.git）
 *
 */
@Injectable({
  providedIn: 'root'
})
export class NgxPerfectScrollbarService {

  constructor(
    private ngZone: NgZone,
  ) { }

  /** 滚动动画,流畅地滚动组件中的内容
   *
   *
   * @params {*} instance 滚动条实例
   * @params {SCROLL_DIRECTION} target 要执行的操作
   * @params {number} value 滚动的距离值（以px为单位）
   * @params {number} [speed] 滚动速度
   * @memberof NgxPerfectScrollbarService
   */
  animateScrolling(instance: any, target: SCROLL_DIRECTION, value: number, speed?: number): void {
    this.ngZone.runOutsideAngular(() => {
      if (!instance) {
        return;
      }
      let animation = null;
      this.requestAnimationFrame(instance, animation, target, value, speed);
    });
  }

  /** 销毁滚动条实例
   *
   *
   * @params {*} instance 滚动条实例
   * @memberof NgxPerfectScrollbarService
   */
  destroyPerfectScrollbar(instance: any): void {
    if (instance) {
      instance.destroy();
    }
  }

  /** 初始化滚动条
   *
   *
   * @params {HTMLElement} el 要添加滚动条的html元素
   * @params {Object} options 滚动条配置
   * @params {*} [instance] 滚动条实例
   * @returnses {*}
   * @memberof NgxPerfectScrollbarService
   */
  initPerfectScrollbar(el: HTMLElement, options: Object, instance?: any): any {
    this.destroyPerfectScrollbar(instance);
    instance = new PerfectScrollbar(el, options);
    return instance;
  }

  /** animateScrolling()的内部实现
   *
   *
   * @params {*} instance 滚动条实例
   * @params {number} animation 
   * @params {SCROLL_DIRECTION} target 目标
   * @params {number} value 值
   * @params {number} [speed] 滚动速度
   * @returnses {number}
   * @memberof NgxPerfectScrollbarService
   */
  private requestAnimationFrame(instance: any, animation: number, target: SCROLL_DIRECTION, value: number, speed?: number): number {
    if (!instance) {
      return;
    }
    const htmlElement = instance.element;
    if (animation) {
      window.cancelAnimationFrame(animation);
      animation = null;
    }

    if (!speed || typeof window === 'undefined') {
      htmlElement[target] = value;
    } else if (value !== htmlElement[target]) {
      let newValue = 0;
      let scrollCount = 0;

      let oldTimestamp = performance.now();
      let oldValue = htmlElement[target];

      const cosParameter = (oldValue - value) / 2;

      const step = (newTimestamp: number) => {
        scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));

        newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));

        // Only continue animation if scroll position has not changed
        if (htmlElement[target] === oldValue) {
          if (scrollCount >= Math.PI) {
            animation = this.requestAnimationFrame(instance, animation, target, value, 0);
          } else {
            htmlElement[target] = newValue;

            // On a zoomed out page the resulting offset may differ
            oldValue = htmlElement[target];

            oldTimestamp = newTimestamp;

            animation = window.requestAnimationFrame(step);
          }
        }
      };

      window.requestAnimationFrame(step);
    }

    return animation;
  }

  /** 将内容滚动到指定位置
   *
   *
   * @params {*} instance 滚动条实例
   * @params {number} x x轴方向滚动多长距离（以px为单位）
   * @params {number} [y] y轴方向滚动多长距离（以px为单位）
   * @params {number} [speed] 滚动速度
   * @memberof NgxPerfectScrollbarService
   */
  scrollTo(instance: any, x: number, y?: number, speed?: number): void {
    if (y == null && speed == null) {
      this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, x, speed);
    } else {
      if (x != null) {
        this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_LEFT, x, speed);
      }
      if (y != null) {
        this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, y, speed);
      }
    }
  }

  /** 将内容滚动到底部指定位置（以px为单位）
   *
   *
   * @params {*} instance 滚动条实例
   * @params {number} [offset] y轴方向偏移底部多长距离（以px为单位）
   * @params {number} [speed] 滚动速度
   * @memberof NgxPerfectScrollbarService
   */
  scrollToBottom(instance: any, offset?: number, speed?: number): void {
    const htmlElement = instance.element;
    const top = htmlElement.scrollHeight - htmlElement.clientHeight;
    this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, top - (offset || 0), speed);
  }

  /** 滚动到指定dom元素的位置
   *
   *
   * @params {*} instance 滚动条实例
   * @params {string} qs 指定元素的选择器
   * @params {number} [offsetX] x轴偏移量（以px为单位）
   * @params {number} [offsetY] y轴偏移量（以px为单位）
   * @params {number} [speed] 滚动速度
   * @memberof NgSipsdPerfectScrollbarComponent
   */
  scrollToElement(instance: any, qs: string, offsetX?: number, offsetY?: number, speed?: number): void {
    const htmlElement = instance.element;
    const element = htmlElement.querySelector(qs);

    if (element) {
      const elementPos = element.getBoundingClientRect();
      const scrollerPos = htmlElement.getBoundingClientRect();

      if (htmlElement.classList.contains('ps--active-x')) {
        const currentPos = htmlElement[SCROLL_DIRECTION.SCROLL_LEFT];
        const position = elementPos.left - scrollerPos.left + currentPos;
        this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_LEFT, position + (offsetX || 0), speed);
      }

      if (htmlElement.classList.contains('ps--active-y')) {
        const currentPos = htmlElement[SCROLL_DIRECTION.SCROLL_TOP];
        const position = elementPos.top - scrollerPos.top + currentPos;
        this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, position + (offsetY || 0), speed);
      }
    }
  }

  /** 将内容滚动到左边指定位置（以px为单位）
   *
   *
   * @params {*} instance 滚动条实例
   * @params {number} [offset] x轴方向偏移左边多长距离
   * @params {number} [speed] 滚动速度
   * @memberof NgxPerfectScrollbarService
   */
  scrollToLeft(instance: any, offset?: number, speed?: number): void {
    this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_LEFT, (offset || 0), speed);
  }

  /** 将内容滚动到右边指定位置（以px为单位）
   *
   *
   * @params {*} instance 滚动条实例
   * @params {number} [offset] x轴方向偏移右边多长距离（以px为单位）
   * @params {number} [speed] 滚动速度
   * @memberof NgxPerfectScrollbarService
   */
  scrollToRight(instance: any, offset?: number, speed?: number): void {
    const htmlELement = instance.element;
    const left = htmlELement.scrollWidth - htmlELement.clientWidth;
    this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_LEFT, left - (offset || 0), speed);
  }

  /** 将内容滚动到顶部指定位置（以px为单位）
   *
   *
   * @params {*} instance 滚动条实例
   * @params {number} [offset] y轴方向偏移顶部多长的距离（以px为单位）
   * @params {number} [speed] 滚动速度
   * @memberof NgxPerfectScrollbarService
   */
  scrollToTop(instance: any, offset?: number, speed?: number): void {
    this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, (offset || 0), speed);
  }

  /** 将内容在x轴方向滚动到指定位置（以px为单位）
   *
   *
   * @params {*} instance 滚动条实例
   * @params {number} x x轴方向滚动多长距离（以px为单位）
   * @params {number} [speed] 滚动速度
   * @memberof NgxPerfectScrollbarService
   */
  scrollToX(instance: any, x: number, speed?: number): void {
    this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_LEFT, x, speed);
  }

  /** 将内容在y轴方向滚动到指定位置（以px为单位）
   *
   *
   * @params {*} instance 滚动条实例
   * @params {number} y y轴方向滚动多长距离（以px为单位）
   * @params {number} [speed] [speed] 滚动速度
   * @memberof NgxPerfectScrollbarService
   */
  scrollToY(instance: any, y: number, speed?: number): void {
    this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, y, speed);
  }

}
