import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { MainTemplateModule } from "./components/main-template";
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import { ButtonModule } from "../../shared/components/button";

@NgModule({
  declarations: [
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MainTemplateModule,
    ButtonModule,
  ]
})
export class DashboardModule {}
