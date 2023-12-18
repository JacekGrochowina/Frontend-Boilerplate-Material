import { Component } from '@angular/core';

import { ContentTemplateComponent } from '@pages/dashboard/components/content-template/content-template.component';
import { HeaderPageComponent } from '@shared/components/header-page/header-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [ContentTemplateComponent, HeaderPageComponent]
})
export class HomeComponent {}
