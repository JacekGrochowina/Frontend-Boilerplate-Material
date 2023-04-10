import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { ContentTemplateModule } from "../../components/content-template";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContentTemplateModule,
  ]
})
export class HomeModule {}
