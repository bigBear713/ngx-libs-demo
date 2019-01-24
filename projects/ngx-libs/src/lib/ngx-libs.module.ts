import { NgModule } from '@angular/core';
import { NgxShadeModule } from './ngx-shade/ngx-shade.module';
import { NgxPrismjsModule } from './ngx-prismjs/ngx-prismjs.module';

const MODULES = [
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
