import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-empty',
  templateUrl: './table-empty.component.html',
  styleUrls: ['./table-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableEmptyComponent {}
