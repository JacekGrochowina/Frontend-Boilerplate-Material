import { Component } from '@angular/core';
import { AppRouting } from '../../utils';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  protected get registerPage() {
    return `./${AppRouting.register}`;
  }

  protected get loginPage() {
    return `./${AppRouting.login}`;
  }
}
