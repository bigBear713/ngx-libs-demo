import { NgModule } from '@angular/core';
import { PerfectScrollbarDemoComponent } from './perfect-scrollbar-demo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PerfectScrollbarDemoComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfectScrollbarDemoRouteModule { }
