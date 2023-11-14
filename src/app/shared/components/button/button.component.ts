import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { ButtonAppearanceType, ButtonType } from './types';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    NgTemplateOutlet,
    MatIconModule,
    MatProgressSpinnerModule,
    AsyncPipe,
  ],
})
export class ButtonComponent {

  @Input() typeAttribute: ButtonType = 'button';
  @Input() appearanceAttribute: ButtonAppearanceType = 'basic';
  @Input() isLoading$: Observable<boolean> = of(false);
  @Input() isLoading: boolean = false;
  @Input() disabledAttribute: boolean = false;
  @Input() disabledAttribute$: Observable<boolean> = of(false);
  @Input() label!: string;
  @Input() color: ThemePalette = 'primary';
  @Input() icon?: string;
  @Input() inline: boolean = true;
  @Input() routerLinkAttribute?: any[] | string | null | undefined;
  @Input() class?: string;

  @Output() buttonClickEvent = new EventEmitter<MouseEvent>();

  protected click(mouseEvent: MouseEvent): void {
    this.buttonClickEvent.emit(mouseEvent);
  }
}
