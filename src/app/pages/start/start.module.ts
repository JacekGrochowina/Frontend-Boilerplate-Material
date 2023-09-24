import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { StartComponent } from './start.component';
import { StartRoutingModule } from "./start-routing.module";
import { ButtonModule } from "../../shared/components/button";

@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    ButtonModule,
    NgOptimizedImage,
  ]
})
export class StartModule {}
