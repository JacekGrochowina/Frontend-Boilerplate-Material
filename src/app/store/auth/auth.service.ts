import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from '@store/auth/interfaces';
import { ICurrentUserResponse } from '@store/auth/interfaces/current-user-response.interface';
import { LocalStorageService } from '@shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  public getCurrentUser(): Observable<ICurrentUserResponse> {
    const url = `${this.apiUrl}/current`;
    return this.http.get<ICurrentUserResponse>(url);
  }

  public register(request: IRegisterRequest): Observable<IRegisterResponse> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<IRegisterResponse>(url, request);
  }

  public login(request: ILoginRequest): Observable<ILoginResponse> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<ILoginResponse>(url, request);
  }

  public getJwtAccessToken(): string | null {
    const key = this.localStorageService.KEYS.JWT_ACCESS_TOKEN;
    return localStorage.getItem(key);
  }

  public setJwtAccessToken(accessToken: string): void {
    const key = this.localStorageService.KEYS.JWT_ACCESS_TOKEN;
    localStorage.setItem(key, accessToken);
  }
}
