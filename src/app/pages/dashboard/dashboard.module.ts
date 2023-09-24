import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainTemplateModule } from './components/main-template';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ButtonModule } from '../../shared/components/button';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MainTemplateModule,
    ButtonModule,
  ]
})
export class DashboardModule {}
