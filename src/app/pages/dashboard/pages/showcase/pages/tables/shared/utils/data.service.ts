import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IDataItem } from './data-item.interface';
import { DATA_MOCK } from './data.mock';
import { ERROR_RESPONSE_MOCK } from './error-response.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataMockListItems$ = new BehaviorSubject<IDataItem[]>([]);
  public dataMockListLoading$ = new BehaviorSubject<boolean>(false);
  public dataMockListSuccess$ = new BehaviorSubject<boolean>(false);
  public dataMockListError$ = new BehaviorSubject<HttpErrorResponse | null>(null);

  public getDataMockList(success: boolean = true, isEmpty: boolean = false): void {
    this.dataMockListItems$.next([]);
    this.dataMockListLoading$.next(true);
    this.dataMockListSuccess$.next(false);
    this.dataMockListError$.next(null);

    of(DATA_MOCK).pipe(
      delay(2000),
      tap((dataMock) => {
        if (success) {
          if (!isEmpty) this.dataMockListItems$.next(dataMock);
          this.dataMockListSuccess$.next(true);
        } else {
          this.dataMockListSuccess$.next(false);
          this.dataMockListError$.next(ERROR_RESPONSE_MOCK);
        }

        this.dataMockListLoading$.next(false);
      })
    ).subscribe();
  }
}
