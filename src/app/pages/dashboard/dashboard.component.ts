import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainTemplateComponent } from '@pages/dashboard/components/main-template/main-template.component';

@Component({
  selector: 'app-login',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [MainTemplateComponent, RouterOutlet]
})
export class DashboardComponent {}
