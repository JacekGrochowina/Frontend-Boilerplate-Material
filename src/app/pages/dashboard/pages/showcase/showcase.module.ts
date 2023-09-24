import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { ContentTemplateModule } from '../../components/content-template';
import { HeaderPageModule } from '../../../../shared/components/header-page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ShowcaseComponent],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    ContentTemplateModule,
    HeaderPageModule,
  ]
})
export class ShowcaseModule {}
