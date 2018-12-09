import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './docs.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: 'shade-demo',
        loadChildren: './../shade-demo/shade-demo.module#ShadeDemoModule'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'shade-demo'
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutesModule { }
