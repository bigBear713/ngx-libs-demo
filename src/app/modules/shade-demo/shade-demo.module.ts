import { NgxShadeModule } from 'ngx-libs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShadeDemoComponent } from './shade-demo.component';
import { ShadeDemoRoutesModule } from './shade-demo.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShadeDemoRoutesModule,
    // 可以直接引用相应的组件模块，
    // 也可以引用总模块NgxLibsModule,
    NgxShadeModule,
  ],
  declarations: [ShadeDemoComponent]
})
export class ShadeDemoModule { }
