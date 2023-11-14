import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-content-template',
  templateUrl: './content-template.component.html',
  styleUrl: './content-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatCardModule]
})
export class ContentTemplateComponent {

  @Input() width: number = 1200;

  protected get stylesInline(): string {
    return `${this.width}px`;
  }
}
