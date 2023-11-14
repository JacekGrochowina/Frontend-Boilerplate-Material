import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { HeaderPageComponent } from '../../../../../../shared/components/header-page/header-page.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
  standalone: true,
  imports: [HeaderPageComponent, ButtonComponent]
})
export class ButtonsComponent {}
