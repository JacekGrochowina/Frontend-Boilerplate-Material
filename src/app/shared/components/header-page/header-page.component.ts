import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterLink, MatDividerModule, NgClass]
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
