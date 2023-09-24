import { Component, Input } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() drawerRef!: MatDrawer;

  protected onMenuClick(): void {
    this.drawerRef.toggle();
  }
}
