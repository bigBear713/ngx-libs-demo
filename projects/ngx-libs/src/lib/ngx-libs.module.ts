import { NgModule } from '@angular/core';
import { NgxShadeModule } from './ngx-shade/index';
import { NgxPrismjsModule } from './ngx-prismjs/index';
import { NgxPerfectScrollbarModule } from './ngx-perfect-scrollbar/index';

const MODULES = [
  NgxPrismjsModule,
  NgxShadeModule,
  NgxPerfectScrollbarModule
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [],
  exports: [
    ...MODULES
  ]
})
export class NgxLibsModule { }
