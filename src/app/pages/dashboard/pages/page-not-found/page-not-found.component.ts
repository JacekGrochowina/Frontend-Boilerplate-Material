import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ButtonComponent } from '@shared/components/button/button.component';
import { DashboardRouting } from '@pages/dashboard/utils';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
  standalone: true,
  imports: [ButtonComponent]
})
export class PageNotFoundComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  protected backToHomePage(event: MouseEvent): void {
    this.router.navigate([`./${DashboardRouting.home}`], {
      relativeTo: this.route.parent
    });
  }
}
