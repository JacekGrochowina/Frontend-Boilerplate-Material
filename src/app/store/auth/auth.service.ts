import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from '@store/auth/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  public register(request: IRegisterRequest): Observable<IRegisterResponse> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<IRegisterResponse>(url, request);
  }

  public login(request: ILoginRequest): Observable<ILoginResponse> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<ILoginResponse>(url, request);
  }
}
