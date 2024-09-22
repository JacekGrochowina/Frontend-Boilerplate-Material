import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Observable, Subject, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ITableInfoChange } from '@shared/components/table/interfaces';
import { takeUntil } from 'rxjs/operators';
import { ITableInfo } from '@shared/components/table/interfaces/table-info.interface';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatPaginatorModule,
    AsyncPipe
  ],
  standalone: true
})
export class TableContentComponent implements AfterViewInit, OnDestroy {

  // Base Inputs
  @Input() items$!: Observable<any[]>;
  @Input() info$!: Observable<ITableInfo>; // needed using pagination, search, filters etc.

  // Settings Inputs
  @Input() pagination: boolean = false;

  @Output() pageChange = new EventEmitter<ITableInfoChange>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private unsubscribe$ = new Subject<boolean>();

  protected readonly pageSizeOptions = [5, 10, 25, 50];
  protected readonly pageSize = 10;

  public ngAfterViewInit(): void {
    if (this.pagination) this.initPagination();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  private initPagination(): void {
    this.paginator.page
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => {
          const page = this.paginator.pageIndex;
          const limit = this.paginator.pageSize;

          this.pageChange.emit({ page, limit });
        })
      )
      .subscribe();

    this.info$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((info) => {
        this.paginator.pageIndex = info.page;
        this.paginator.pageSize = info.limit;
      });
  }

}
