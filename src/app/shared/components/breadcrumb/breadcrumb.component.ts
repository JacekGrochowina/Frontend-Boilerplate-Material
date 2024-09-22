import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BreadcrumbService } from '@shared/services/breadcrumb.service';
import { IBreadcrumb } from '@shared/components/breadcrumb/interfaces';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
  }

}
