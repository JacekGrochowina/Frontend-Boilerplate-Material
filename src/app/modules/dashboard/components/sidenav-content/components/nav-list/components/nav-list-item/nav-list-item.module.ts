import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListItemComponent } from './nav-list-item.component';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterLink, RouterLinkActive } from "@angular/router";


@NgModule({
  declarations: [
    NavListItemComponent
  ],
  exports: [
    NavListItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    RouterLinkActive,
    RouterLink
  ]
})
export class NavListItemModule {}
