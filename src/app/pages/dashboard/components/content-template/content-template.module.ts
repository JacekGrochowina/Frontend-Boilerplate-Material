import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTemplateComponent } from './content-template.component';
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
    ContentTemplateComponent
  ],
  exports: [
    ContentTemplateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ContentTemplateModule {}
