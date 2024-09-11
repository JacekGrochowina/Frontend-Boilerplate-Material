import { HttpInterceptorFn } from '@angular/common/http';
import { filter, switchMap, take } from 'rxjs';
import { AuthFacade } from '@store/auth/auth.facade';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authFacade = inject(AuthFacade); // Wstrzykujemy zależność

  return authFacade.tokens$
    .pipe(
      filter((authJwtToken) => !!authJwtToken),
      take(1),
      switchMap((authJwtToken) => {
        if (authJwtToken?.accessToken) {
          const clonedRequest = req.clone({
            headers: req.headers.set('Authorization', authJwtToken.accessToken)
          });
          return next(clonedRequest);
        }

        return next(req);
      })
    );
};
