import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DashboardRouting } from "../../utils";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  protected backToHomePage(event: MouseEvent): void {
    this.router.navigate([`./${DashboardRouting.home}`], {
      relativeTo: this.route.parent
    })
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}
}
