import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavListComponent } from './components/nav-list/nav-list.component';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NavListComponent]
})
export class SidenavContentComponent {}
