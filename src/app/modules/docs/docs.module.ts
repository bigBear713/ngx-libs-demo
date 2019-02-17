import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { DocsRoutesModule } from './docs.routing';
import { DocsService } from './docs.service';
import { NgxLibsModule } from 'ngx-libs';

@NgModule({
  imports: [
    CommonModule,
    DocsRoutesModule,
    NgxLibsModule
  ],
  declarations: [DocsComponent],
  providers: [
    DocsService
  ]
})
export class DocsModule { }
