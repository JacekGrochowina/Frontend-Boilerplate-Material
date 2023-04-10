import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from "./settings-routing.module";
import { ContentTemplateModule } from "../../components/content-template";

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ContentTemplateModule,
  ]
})
export class SettingsModule {}
