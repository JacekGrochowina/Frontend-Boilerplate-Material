import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavWrapperComponent } from './sidenav-wrapper.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { ToolbarModule } from "../toolbar";


@NgModule({
  declarations: [
    SidenavWrapperComponent
  ],
  exports: [
    SidenavWrapperComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    ToolbarModule
  ]
})
export class SidenavWrapperModule {}
