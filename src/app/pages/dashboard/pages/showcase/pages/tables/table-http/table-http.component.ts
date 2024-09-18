import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../shared/utils/data.service';
import { AsyncPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from '@shared/components/table/table.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { HeaderPageComponent } from '@shared/components/header-page/header-page.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, merge, Observable, of, startWith, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table-http',
  templateUrl: './table-http.component.html',
  styleUrl: './table-http.component.scss',
  standalone: true,
  imports: [HeaderPageComponent, ButtonComponent, TableComponent, MatTableModule, AsyncPipe, MatPaginatorModule]
})
export class TableHttpComponent implements OnInit, AfterViewInit {

  private exampleDatabase!: ExampleHttpDatabase | null;

  protected data: BehaviorSubject<DataMockItem[]> = new BehaviorSubject<DataMockItem[]>([]);
  protected resultsLength = 0;
  protected isLoadingResults: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  protected isSuccessResults: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  protected isRateLimitReached = false;
  protected displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  get dataMockListItems$() {
    return this.data.asObservable();
  }

  get dataMockListLoading$() {
    return this.isLoadingResults.asObservable();
  }

  get dataMockListSuccess$() {
    return this.isSuccessResults.asObservable();
  }

  get dataMockListError$() {
    return of(null);
  }

  constructor(
    private http: HttpClient,
    protected dataService: DataService
  ) {}

  public ngOnInit(): void {
    this.dataService.getDataMockList();
  }

  public ngAfterViewInit(): void {
    this.exampleDatabase = new ExampleHttpDatabase(this.http);

    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults.next(true);
          this.isSuccessResults.next(false);
          return this.exampleDatabase!.getDataMockList(
            this.paginator.pageIndex,
            this.paginator.pageSize
          ).pipe(catchError(() => of(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults.next(false);
          this.isSuccessResults.next(true);
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.info.total;
          return data.data;
        })
      )
      .subscribe(data => (this.data.next(data)));

    this.dataMockListItems$.subscribe((items) => {
      console.log('items', items);
    });
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
  info: {
    total: number;
    page: number;
    limit: number;
  }
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
