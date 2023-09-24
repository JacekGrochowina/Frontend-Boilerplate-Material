import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list.component';
import { MatListModule } from "@angular/material/list";
import { NavListItemModule } from "./components/nav-list-item";


@NgModule({
  declarations: [
    NavListComponent
  ],
  exports: [
    NavListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    NavListItemModule
  ]
})
export class NavListModule {}
