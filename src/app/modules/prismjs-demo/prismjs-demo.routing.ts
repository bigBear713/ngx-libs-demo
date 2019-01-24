import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrismjsDemoComponent } from './prismjs-demo.component';

const routes: Routes = [
  {
    path: '',
    component: PrismjsDemoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrismjsDemoRoutesModule { }
