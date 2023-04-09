import { Component } from '@angular/core';
import { Routing } from "../../shared/utils/enums";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  protected get registerPage() {
    return `./${Routing.register}`;
  }

  protected get loginPage() {
    return `./${Routing.login}`;
  }
}
