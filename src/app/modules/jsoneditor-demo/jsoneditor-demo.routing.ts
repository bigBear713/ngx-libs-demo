import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { JsoneditorDemoComponent } from './jsoneditor-demo.component';

const routes: Routes = [
  {
    path: '',
    component: JsoneditorDemoComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsoneditorDemoRoutesModule { }
