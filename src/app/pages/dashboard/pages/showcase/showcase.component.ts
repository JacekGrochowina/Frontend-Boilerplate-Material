import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentTemplateComponent } from '../../components/content-template/content-template.component';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss',
  standalone: true,
  imports: [ContentTemplateComponent, RouterOutlet]
})
export class ShowcaseComponent {}
