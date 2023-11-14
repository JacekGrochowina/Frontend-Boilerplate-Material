import { Component } from '@angular/core';
import { HeaderPageComponent } from '../../../../shared/components/header-page/header-page.component';
import { ContentTemplateComponent } from '../../components/content-template/content-template.component';

@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [ContentTemplateComponent, HeaderPageComponent]
})
export class HomeComponent {}
