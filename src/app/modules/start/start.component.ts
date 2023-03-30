import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Routing } from "../../shared/utils/enums/routing.enum";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  protected get currentYear(): number {
    return new Date().getFullYear();
  }

  protected get author(): string {
    return environment.author;
  }

  protected get registerPage() {
    return `./${Routing.register}`;
  }

  protected get loginPage() {
    return `./${Routing.login}`;
  }
}
