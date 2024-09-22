import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { map, takeUntil } from 'rxjs/operators';
import { combineLatest, Observable, Subject } from 'rxjs';

import { TableLoadingComponent } from '@shared/components/table/table-loading/table-loading.component';
import { TableErrorComponent } from '@shared/components/table/table-error/table-error.component';
import { TableEmptyComponent } from '@shared/components/table/table-empty/table-empty.component';
import { TableContentComponent } from '@shared/components/table/table-content/table-content.component';
import { ITableInfoChange } from '@shared/components/table/interfaces';
import { ITableInfo } from '@shared/components/table/interfaces/table-info.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TableLoadingComponent,
    TableErrorComponent,
    TableEmptyComponent,
    TableContentComponent,
    AsyncPipe
  ]
})
export class TableComponent implements OnInit, OnDestroy {

  // Base Inputs
  @Input() items$!: Observable<any[]>;
  @Input() info$!: Observable<ITableInfo>; // needed using pagination, search, filters etc.
  @Input() loading$!: Observable<boolean>;
  @Input() success$!: Observable<boolean>;
  @Input() error$!: Observable<HttpErrorResponse | null>;

  // Settings Inputs
  @Input() pagination: boolean = false;

  @Output() pageChange = new EventEmitter<ITableInfoChange>();

  protected isEmpty$!: Observable<boolean>;
  protected isTableErrorVisible$!: Observable<boolean>;
  protected isTableEmptyVisible$!: Observable<boolean>;
  protected isTableContentVisible$!: Observable<boolean>;

  private unsubscribe$ = new Subject<boolean>();

  public ngOnInit(): void {
    this.isEmpty$ = this.getIsEmpty();
    this.isTableErrorVisible$ = this.getIsTableErrorVisible();
    this.isTableEmptyVisible$ = this.getIsTableEmptyVisible();
    this.isTableContentVisible$ = this.getIsTableContentVisible();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  protected onPageChange(event: ITableInfoChange): void {
    this.pageChange.emit(event);
  }

  private getIsEmpty(): Observable<boolean> {
    return this.items$.pipe(
      takeUntil(this.unsubscribe$),
      map((items) => items.length === 0)
    );
  }

  private getIsTableErrorVisible(): Observable<boolean> {
    return combineLatest([this.loading$, this.error$])
      .pipe(
        takeUntil(this.unsubscribe$),
        map(([loading, error]) => !loading && !!error)
      );
  }

  private getIsTableEmptyVisible(): Observable<boolean> {
    return combineLatest([this.loading$, this.error$, this.isEmpty$])
      .pipe(
        takeUntil(this.unsubscribe$),
        map(([loading, error, isEmpty]) => !loading && !error && isEmpty)
      );
  }

  private getIsTableContentVisible(): Observable<boolean> {
    return combineLatest([this.loading$, this.isEmpty$])
      .pipe(
        takeUntil(this.unsubscribe$),
        map(([loading, isEmpty]) => !loading && !isEmpty)
      );
  }

}
