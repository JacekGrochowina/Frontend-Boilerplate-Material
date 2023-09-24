import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-template',
  templateUrl: './content-template.component.html',
  styleUrls: ['./content-template.component.scss']
})
export class ContentTemplateComponent {

  @Input() width: number = 1200;

  protected get stylesInline(): string {
    return `${this.width}px`;
  }
}
