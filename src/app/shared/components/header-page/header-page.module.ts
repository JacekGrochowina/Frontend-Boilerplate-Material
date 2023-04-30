import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    HeaderPageComponent
  ],
  exports: [
    HeaderPageComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class HeaderPageModule {}
