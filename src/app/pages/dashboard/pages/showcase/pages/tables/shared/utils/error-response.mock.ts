import { HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';

export const ERROR_RESPONSE_MOCK: HttpErrorResponse = {
  name: 'HttpErrorResponse',
  message: 'Wystąpił błąd serwera',
  error: undefined,
  ok: false,
  headers: new HttpHeaders,
  status: 0,
  statusText: '',
  url: null,
  type: HttpEventType.ResponseHeader
}
