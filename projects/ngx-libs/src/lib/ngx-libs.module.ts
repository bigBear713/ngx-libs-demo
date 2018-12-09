import { NgModule } from '@angular/core';
import { NgxShadeModule } from './ngx-shade';

const MODULES = [
  NgxShadeModule
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
