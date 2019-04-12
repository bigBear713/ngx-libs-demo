import { NgModule } from '@angular/core';
import { NgxJsoneditorModule } from './ngx-jsoneditor/index';
import { NgxPerfectScrollbarModule } from './ngx-perfect-scrollbar/index';
import { NgxPrismjsModule } from './ngx-prismjs/index';
import { NgxShadeModule } from './ngx-shade/index';

const MODULES = [
  NgxJsoneditorModule,
  NgxPerfectScrollbarModule,
  NgxPrismjsModule,
  NgxShadeModule,
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
