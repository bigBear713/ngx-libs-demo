import { NgxPrismjsModule } from 'ngx-libs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismjsDemoComponent } from './prismjs-demo.component';
import { PrismjsDemoRoutesModule } from './prismjs-demo.routing';

@NgModule({
  imports: [
    CommonModule,
    PrismjsDemoRoutesModule,
    NgxPrismjsModule,
  ],
  declarations: [PrismjsDemoComponent]
})
export class PrismjsDemoModule { }
