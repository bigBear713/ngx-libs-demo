import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { DocsRoutesModule } from './docs.routing';
import { DocsService } from './docs.service';

@NgModule({
  imports: [
    CommonModule,
    DocsRoutesModule,
  ],
  declarations: [DocsComponent],
  providers: [
    DocsService
  ]
})
export class DocsModule { }
