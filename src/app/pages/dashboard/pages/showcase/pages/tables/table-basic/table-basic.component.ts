import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/utils/data.service';
import { AsyncPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from '@shared/components/table/table.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { HeaderPageComponent } from '@shared/components/header-page/header-page.component';

@Component({
  selector: 'app-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrl: './table-basic.component.scss',
  standalone: true,
  imports: [HeaderPageComponent, ButtonComponent, TableComponent, MatTableModule, AsyncPipe]
})
export class TableBasicComponent implements OnInit {

  protected dataMockListItems$ = this.dataService.dataMockListItems$;
  protected dataMockListLoading$ = this.dataService.dataMockListLoading$;
  protected dataMockListSuccess$ = this.dataService.dataMockListSuccess$;
  protected dataMockListError$ = this.dataService.dataMockListError$;

  protected displayedColumns: string[] = [
    'username',
    'email',
    'vehicle'
  ];

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
