import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-table-error',
  templateUrl: './table-error.component.html',
  styleUrls: ['./table-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableErrorComponent {
  @Input() error$!: Observable<HttpErrorResponse | null>;
}
