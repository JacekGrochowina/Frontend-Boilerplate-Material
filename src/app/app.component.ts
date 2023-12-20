import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsFacade } from '@store/settings/settings.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe]
})
export class AppComponent {
  protected isLightMode$ = this.settingsFacade.isLightMode$;

  constructor(private settingsFacade: SettingsFacade) {}
}
