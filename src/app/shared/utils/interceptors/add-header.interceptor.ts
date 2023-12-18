import { HttpInterceptorFn } from '@angular/common/http';

export const addHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    headers: req.headers.append('Content-Type', 'application/json')
  });
  return next(clonedRequest);
};
