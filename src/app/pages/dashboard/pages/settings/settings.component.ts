import { Component } from '@angular/core';

import { ContentTemplateComponent } from '@pages/dashboard/components/content-template/content-template.component';
import { HeaderPageComponent } from '@shared/components/header-page/header-page.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  standalone: true,
  imports: [ContentTemplateComponent, HeaderPageComponent]
})
export class SettingsComponent {}
