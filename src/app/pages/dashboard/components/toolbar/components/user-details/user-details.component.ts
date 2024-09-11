import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { isNull } from 'lodash';

import { AuthFacade } from '@store/auth/auth.facade';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe
  ]
})
export class UserDetailsComponent implements OnDestroy {

  private unsubscribe$ = new Subject<boolean>();

  protected user$ = this.authFacade.user$;

  protected get avatarInitials$(): Observable<string> {
    return this.user$.pipe(
      takeUntil(this.unsubscribe$),
      map((user) =>
        isNull(user) ? '' : `${user.firstName[0]}${user.lastName[0]}`
      ));
  }

  constructor(private authFacade: AuthFacade) {}

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

}
