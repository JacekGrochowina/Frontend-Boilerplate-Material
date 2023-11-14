import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table-error',
  templateUrl: './table-error.component.html',
  styleUrl: './table-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule, AsyncPipe],
})
export class TableErrorComponent {
  @Input() error$!: Observable<HttpErrorResponse | null>;
}
