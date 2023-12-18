import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegisterRequest } from './interfaces/register-request.interface';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { IBasicResponse } from '@shared/utils/interfaces/http/basic-response.interface';
import { ILoginRequest } from '@store/auth/interfaces/login-request.interface';
import { ILoginResponse } from '@store/auth/interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  public register(request: IRegisterRequest): Observable<IBasicResponse> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<IBasicResponse>(url, request);
  }

  public login(request: ILoginRequest): Observable<ILoginResponse> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<ILoginResponse>(url, request);
  }
}
