import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrismjsDirective } from './ngx-prismjs.directive';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      NgxPrismjsDirective
   ],
   exports: [
      NgxPrismjsDirective
   ]
})
export class NgxPrismjsModule { }
