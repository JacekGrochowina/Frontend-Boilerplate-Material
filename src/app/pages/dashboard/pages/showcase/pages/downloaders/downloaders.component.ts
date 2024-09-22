import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesDownloadService } from '@shared/services/files-download.service';
import { HeaderPageComponent } from '@shared/components/header-page/header-page.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-downloaders',
  templateUrl: './downloaders.component.html',
  styleUrl: './downloaders.component.scss',
  standalone: true,
  imports: [CommonModule, HeaderPageComponent, ButtonComponent]
})
export class DownloadersComponent {
  constructor(private filesDownloadService: FilesDownloadService) {}

  public openFilePDF($event: MouseEvent): void {
    this.filesDownloadService.openFile(
      'http://localhost:8080/drivers/files/pdf',
      'pdf'
    ).subscribe();
  }

  public downloadFilePDF($event: MouseEvent): void {
    this.filesDownloadService.downloadFile(
      'http://localhost:8080/drivers/files/pdf',
      'drivers',
      'pdf'
    ).subscribe();
  }

  public openFileCSV($event: MouseEvent): void {
    this.filesDownloadService.openFile(
      'http://localhost:8080/drivers/files/csv',
      'csv'
    ).subscribe();
  }

  public downloadFileCSV($event: MouseEvent): void {
    this.filesDownloadService.downloadFile(
      'http://localhost:8080/drivers/files/csv',
      'drivers',
      'csv'
    ).subscribe();
  }

  public openFileXLSX($event: MouseEvent): void {
    this.filesDownloadService.openFile(
      'http://localhost:8080/drivers/files/xlsx',
      'xlsx'
    ).subscribe();
  }

  public downloadFileXLSX($event: MouseEvent): void {
    this.filesDownloadService.downloadFile(
      'http://localhost:8080/drivers/files/xlsx',
      'drivers',
      'xlsx'
    ).subscribe();
  }
}
