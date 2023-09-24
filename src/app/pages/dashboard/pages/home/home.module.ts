import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { ContentTemplateModule } from "../../components/content-template";
import { HeaderPageModule } from "../../../../shared/components/header-page";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContentTemplateModule,
    HeaderPageModule,
  ]
})
export class HomeModule {}
