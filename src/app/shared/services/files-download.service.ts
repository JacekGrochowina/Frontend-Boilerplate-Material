import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FileFormat } from '../utils/types/file-format.type';
import { map } from 'rxjs/operators';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class FilesDownloadService {
  constructor(private http: HttpClient) {}

  public getFile(apiUrl: string): Observable<Blob> {
    return this.http.get(apiUrl, { responseType: 'blob' });
  }

  public openFile(apiUrl: string, fileFormat: FileFormat): Observable<Blob> {
    return this.http.get(apiUrl, { responseType: 'blob' }).pipe(
      first(),
      tap((response) => this._openFile(response, fileFormat)),
      map((response) => response)
    );
  }

  public downloadFile(apiUrl: string, fileName: string, fileFormat: FileFormat): Observable<Blob> {
    return this.http.get(apiUrl, { responseType: 'blob' }).pipe(
      first(),
      tap((response) => this._downloadFile(response, fileName, fileFormat)),
      map((response) => response)
    );
  }

  private _openFile(response: Blob, fileFormat: FileFormat): void {
    const blob = new Blob([response], { type: `application/${fileFormat}` });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  private _downloadFile(response: Blob, fileName: string, fileFormat: FileFormat): void {
    const blob = new Blob([response], { type: `application/${fileFormat}` });
    saveAs(blob, `${fileName}.${fileFormat}`);
  }
}
