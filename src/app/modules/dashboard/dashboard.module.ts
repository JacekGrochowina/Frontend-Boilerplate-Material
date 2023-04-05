import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SidenavWrapperModule } from "./components/sidenav-wrapper";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidenavWrapperModule,
  ]
})
export class DashboardModule {}
