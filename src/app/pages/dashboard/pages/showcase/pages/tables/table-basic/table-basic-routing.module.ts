import { RouterModule, Routes } from '@angular/router';
import { TableBasicComponent } from './table-basic.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TableBasicComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableBasicRoutingModule {}
