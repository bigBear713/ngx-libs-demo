import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLibsModule } from 'ngx-libs';
import { JsoneditorDemoComponent } from './jsoneditor-demo.component';
import { JsoneditorDemoRoutesModule } from './jsoneditor-demo.routing';
@NgModule({
  imports: [
    CommonModule,
    JsoneditorDemoRoutesModule,
    NgxLibsModule,
  ],
  declarations: [JsoneditorDemoComponent]
})
export class JsoneditorDemoModule { }
