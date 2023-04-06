import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTemplateComponent } from './main-template.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { ToolbarModule } from "../toolbar";
import { SidenavContentModule } from "../sidenav-content";


@NgModule({
  declarations: [
    MainTemplateComponent
  ],
  exports: [
    MainTemplateComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    ToolbarModule,
    SidenavContentModule
  ]
})
export class MainTemplateModule {}
