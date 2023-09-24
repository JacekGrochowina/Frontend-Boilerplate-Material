import { RouterModule, Routes } from '@angular/router';
import { TableCollapseComponent } from './table-collapse.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TableCollapseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableCollapseRoutingModule {}
