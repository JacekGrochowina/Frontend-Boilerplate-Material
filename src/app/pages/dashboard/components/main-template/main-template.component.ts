import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SidenavContentComponent } from '../sidenav-content/sidenav-content.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatSidenavModule, SidenavContentComponent, ToolbarComponent]
})
export class MainTemplateComponent {}
