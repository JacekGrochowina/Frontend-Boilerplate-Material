import { Component } from '@angular/core';
import { AppRouting } from '../../utils';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
  standalone: true,
  imports: [ButtonComponent]
})
export class StartComponent {
  protected get registerPage(): string {
    return `./${AppRouting.register}`;
  }

  protected get loginPage(): string {
    return `./${AppRouting.login}`;
  }
}
