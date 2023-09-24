import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableContentComponent {}
