import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  readonly KEYS = {
    JWT_ACCESS_TOKEN: 'token'
  };
}
