import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent {

  @Input() drawerRef!: MatDrawer;

  protected onMenuClick(): void {
    this.drawerRef.toggle();
  }
}
