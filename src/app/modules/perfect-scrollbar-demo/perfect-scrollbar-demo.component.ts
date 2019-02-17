import { Component, OnInit } from '@angular/core';
import { NgxPerfectScrollbarService } from 'ngx-libs';

@Component({
  selector: 'app-perfect-scrollbar-demo',
  templateUrl: './perfect-scrollbar-demo.component.html',
  styleUrls: ['./perfect-scrollbar-demo.component.scss'],
})
export class PerfectScrollbarDemoComponent implements OnInit {
  // 滚动条实例
  psInstance: any;

  constructor(
    private psService: NgxPerfectScrollbarService,
  ) { }

  ngOnInit() {
  }

  getPSInstance(instance: any): void {
    this.psInstance = instance;
  }

  goToTop(): void {
    this.psService.scrollToTop(this.psInstance);
  }

  goToBottom(): void {
    // 1000ms滚动最底部
    this.psService.scrollToBottom(this.psInstance, undefined, 1000);
  }

  goToLeft(): void {
    this.psService.scrollToLeft(this.psInstance);
  }

  goToRight(): void {
    this.psService.scrollToRight(this.psInstance);
  }

}
