import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableContentComponent } from './table-content/table-content.component';
import { TableEmptyComponent } from './table-empty/table-empty.component';
import { TableErrorComponent } from './table-error/table-error.component';
import { TableLoadingComponent } from './table-loading/table-loading.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    TableComponent,
    TableContentComponent,
    TableEmptyComponent,
    TableErrorComponent,
    TableLoadingComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
