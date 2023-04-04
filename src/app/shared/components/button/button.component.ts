import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { ButtonAppearanceType, ButtonType } from './types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  @Input() typeAttribute: ButtonType = 'button';
  @Input() appearanceAttribute: ButtonAppearanceType = 'basic';
  @Input() isLoading$: Observable<boolean> = of(false);
  @Input() isLoading: boolean = false;
  @Input() disabledAttribute: boolean = false;
  @Input() label!: string;
  @Input() color: ThemePalette = 'primary';
  @Input() icon?: string;
  @Input() inline: boolean = true;
  @Input() routerLinkAttribute?: string;

  @Output() buttonClickEvent = new EventEmitter<MouseEvent>();

  protected click(mouseEvent: MouseEvent): void {
    this.buttonClickEvent.emit(mouseEvent);
  }
}
