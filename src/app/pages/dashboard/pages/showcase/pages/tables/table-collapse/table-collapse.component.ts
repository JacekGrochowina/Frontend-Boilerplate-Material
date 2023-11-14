import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataService } from '../shared/utils/data.service';
import { DataItem } from '../shared/utils/data-item.interface';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from '../../../../../../../shared/components/table/table.component';
import { ButtonComponent } from '../../../../../../../shared/components/button/button.component';
import { HeaderPageComponent } from '../../../../../../../shared/components/header-page/header-page.component';

@Component({
  selector: 'app-table-basic',
  templateUrl: './table-collapse.component.html',
  styleUrl: './table-collapse.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [
    HeaderPageComponent,
    ButtonComponent,
    TableComponent,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
  ],
})
export class TableCollapseComponent implements OnInit {

  protected dataMockListItems$ = this.dataService.dataMockListItems$;
  protected dataMockListLoading$ = this.dataService.dataMockListLoading$;
  protected dataMockListSuccess$ = this.dataService.dataMockListSuccess$;
  protected dataMockListError$ = this.dataService.dataMockListError$;

  protected displayedColumns = ['username', 'email', 'vehicle'];
  protected displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  protected expandedElement!: DataItem | null;

  constructor(protected dataService: DataService) {}

  public ngOnInit(): void {
    this.dataService.getDataMockList();
  }

  protected onSuccessClick(): void {
    this.dataService.getDataMockList();
  }

  protected onFailClick(): void {
    this.dataService.getDataMockList(false);
  }

  protected onEmptyClick(): void {
    this.dataService.getDataMockList(true, true);
  }
}
