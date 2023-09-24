import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/utils/data.service';

@Component({
  selector: 'app-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.scss']
})
export class TableBasicComponent implements OnInit {

  protected dataMockListItems$ = this.dataService.dataMockListItems$;
  protected dataMockListLoading$ = this.dataService.dataMockListLoading$;
  protected dataMockListSuccess$ = this.dataService.dataMockListSuccess$;
  protected dataMockListError$ = this.dataService.dataMockListError$;

  protected displayedColumns: string[] = [
    'username',
    'email',
    'vehicle',
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
