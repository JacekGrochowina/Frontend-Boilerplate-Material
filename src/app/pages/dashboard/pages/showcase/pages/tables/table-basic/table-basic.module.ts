import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBasicComponent } from './table-basic.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentTemplateModule } from '../../../../../components/content-template';
import { TableBasicRoutingModule } from './table-basic-routing.module';
import { HeaderPageModule } from '../../../../../../../shared/components/header-page';
import { TableModule } from '../../../../../../../shared/components/table';
import { MatTableModule } from '@angular/material/table';
import { ButtonModule } from '../../../../../../../shared/components/button';


@NgModule({
  declarations: [
    TableBasicComponent
  ],
  imports: [
    CommonModule,
    TableBasicRoutingModule,
    MatButtonModule,
    MatIconModule,
    ContentTemplateModule,
    HeaderPageModule,
    TableModule,
    MatTableModule,
    ButtonModule,
  ]
})
export class TableBasicModule {}
