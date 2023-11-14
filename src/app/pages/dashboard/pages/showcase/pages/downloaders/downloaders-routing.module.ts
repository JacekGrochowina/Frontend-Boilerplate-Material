import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DownloadersComponent } from './downloaders.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadersRoutingModule {}
