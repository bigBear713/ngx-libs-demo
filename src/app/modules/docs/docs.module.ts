import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { DocsRoutesModule } from './docs.routing';

@NgModule({
  imports: [
    CommonModule,
    DocsRoutesModule,
  ],
  declarations: [DocsComponent]
})
export class DocsModule { }
