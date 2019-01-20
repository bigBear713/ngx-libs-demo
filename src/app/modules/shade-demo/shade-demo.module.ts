import { NgxLibsModule } from 'ngx-libs';
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
    NgxLibsModule,
    // NgxShadeModule,
  ],
  declarations: [ShadeDemoComponent]
})
export class ShadeDemoModule { }
