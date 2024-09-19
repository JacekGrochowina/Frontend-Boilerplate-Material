import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from '@shared/components/table/table.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { HeaderPageComponent } from '@shared/components/header-page/header-page.component';
import { ITableInfoChange } from '@shared/components/table/interfaces';
import { ITableInfo } from '@shared/components/table/interfaces/table-info.interface';

import { DataService } from '../shared/utils/data.service';

@Component({
  selector: 'app-table-http',
  templateUrl: './table-http.component.html',
  styleUrl: './table-http.component.scss',
  standalone: true,
  imports: [HeaderPageComponent, ButtonComponent, TableComponent, MatTableModule, AsyncPipe, MatPaginatorModule]
})
export class TableHttpComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<boolean>();
  private exampleDatabase: ExampleHttpDatabase = new ExampleHttpDatabase(this.http);

  protected data: BehaviorSubject<DataMockItem[]> = new BehaviorSubject<DataMockItem[]>([]);
  protected info: BehaviorSubject<ITableInfo> = new BehaviorSubject<ITableInfo>({
    total: 0,
    page: 0,
    limit: 10
  });
  protected loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  protected success: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  protected error: BehaviorSubject<HttpErrorResponse | null> = new BehaviorSubject<HttpErrorResponse | null>(null);

  protected displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  get dataMockListItems$() {
    return this.data.asObservable();
  }

  get dataMockListInfo$() {
    return this.info.asObservable();
  }

  get dataMockListLoading$() {
    return this.loading.asObservable();
  }

  get dataMockListSuccess$() {
    return this.success.asObservable();
  }

  get dataMockListError$() {
    return this.error.asObservable();
  }

  constructor(
    private http: HttpClient,
    protected dataService: DataService
  ) {}

  public ngOnInit(): void {
    const info = this.info.getValue();
    this.exampleDatabase.getDataMockList(info.page, info.limit)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        this.data.next(response.data);
        this.info.next(response.info);
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
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

  protected onPageChange(event: ITableInfoChange): void {
    this.exampleDatabase.getDataMockList(event.page, event.limit)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        this.data.next(response.data);
        this.info.next(response.info);
      });
  }
}

export interface DataMockItem {
  id: 1;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birthDate: string;
  drivingLicenseNumber: string;
  createdDate: string;
  updatedDate: string;
}

export interface DataMockList {
  data: DataMockItem[],
  info: ITableInfo,
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  constructor(private http: HttpClient) {}

  getDataMockList(page: number, limit: number): Observable<DataMockList> {
    const href = 'http://localhost:8080';
    const requestUrl = `${href}/drivers?page=${page + 1}&limit=${limit}`;

    return this.http.get<DataMockList>(requestUrl);
  }
}
