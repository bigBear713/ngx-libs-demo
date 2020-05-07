import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './docs.component';
import { NgModule } from '@angular/core';
import { DocsService } from './docs.service';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    resolve: {
      config: DocsService
    },
    children: [
      {
        path: 'jsoneditor-demo',
        loadChildren: () => import('./../jsoneditor-demo/jsoneditor-demo.module').then(m => m.JsoneditorDemoModule)
      },
      {
        path: 'perfect-scrollbar-demo',
        loadChildren: () => import('./../perfect-scrollbar-demo/perfect-scrollbar-demo.module').then(m => m.PerfectScrollbarDemoModule)
      },
      {
        path: 'prismjs-demo',
        loadChildren: () => import('./../prismjs-demo/prismjs-demo.module').then(m => m.PrismjsDemoModule)
      },
      {
        path: 'shade-demo',
        loadChildren: () => import('./../shade-demo/shade-demo.module').then(m => m.ShadeDemoModule)
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
