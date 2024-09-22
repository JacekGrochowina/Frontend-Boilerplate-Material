import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, delay, finalize, Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from '@shared/components/table/table.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { HeaderPageComponent } from '@shared/components/header-page/header-page.component';
import { ITableInfoChange } from '@shared/components/table/interfaces';
import { ITableInfo } from '@shared/components/table/interfaces/table-info.interface';

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

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    const info = this.info.getValue();
    this.loadMockData(info.page, info.limit);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  protected onSuccessClick(): void {
    const info = this.info.getValue();
    this.loadMockData(info.page, info.limit);
  }

  protected onFailClick(): void {
    const info = this.info.getValue();
    this.loadMockData(info.page, info.limit, true);
  }

  protected onPageChange(event: ITableInfoChange): void {
    this.loadMockData(event.page, event.limit);
  }

  private loadMockData(page: number, limit: number, failMock: boolean = false): void {
    this.error.next(null);
    this.loading.next(true);
    this.success.next(false);

    this.exampleDatabase.getDataMockList(page, limit, failMock)
      .pipe(
        takeUntil(this.unsubscribe$),
        delay(2000), // Mock of server delay
        catchError((error: HttpErrorResponse) => {
          this.error.next(error);
          this.loading.next(false);
          return of({ data: [], info: { total: 0, page: 0, limit: 10 } });
        }),
        finalize(() => this.loading.next(false))
      )
      .subscribe((response) => {
        this.data.next(response.data);
        this.info.next(response.info);

        this.success.next(true);
      });
  }
}

export interface DataMockItem {
  id: number;
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

  getDataMockList(page: number, limit: number, failMock: boolean = false): Observable<DataMockList> {
    const href = 'http://localhost:8080';
    const requestUrl = failMock
      ? `${href}/wrong_url`
      : `${href}/drivers?page=${page}&limit=${limit}`;

    return this.http.get<DataMockList>(requestUrl);
  }
}
