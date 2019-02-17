import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarDemoComponent } from './perfect-scrollbar-demo.component';
import { PerfectScrollbarDemoRouteModule } from './perfect-scrollbar-demo.routing';
import { NgxLibsModule } from 'ngx-libs';

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarDemoRouteModule,
    NgxLibsModule
  ],
  declarations: [PerfectScrollbarDemoComponent]
})
export class PerfectScrollbarDemoModule { }
