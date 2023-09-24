import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {

  @Input() title!: string;
  @Input() hasOptionBackToParent: boolean = false;
  @Input() subtitle?: string;
  @Input() icon?: string;

  protected get isIconVisible(): boolean {
    const isIcon = !!this.icon;
    return isIcon && !this.hasOptionBackToParent;
  }

}
