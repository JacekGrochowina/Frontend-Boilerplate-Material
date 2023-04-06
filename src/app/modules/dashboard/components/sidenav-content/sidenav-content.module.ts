import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavContentComponent } from './sidenav-content.component';
import { NavListModule } from "./components/nav-list";


@NgModule({
  declarations: [
    SidenavContentComponent
  ],
  exports: [
    SidenavContentComponent
  ],
  imports: [
    CommonModule,
    NavListModule
  ]
})
export class SidenavContentModule {}
