import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { AppRouting } from '@app/utils';
import { ButtonComponent } from '@shared/components/button/button.component';
import { AuthFacade } from '@store/auth/auth.facade';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
  standalone: true,
  imports: [ButtonComponent]
})
export class StartComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<boolean>();

  protected get registerPage(): string {
    return `./${AppRouting.register}`;
  }

  protected get loginPage(): string {
    return `./${AppRouting.login}`;
  }

  constructor(
    private router: Router,
    private authFacade: AuthFacade
  ) {}

  public ngOnInit(): void {
    this.authFacade.isLogged$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLogged) => {
        isLogged
          ? this.router.navigate([AppRouting.dashboard])
          : this.router.navigate([AppRouting.login]);
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

}
