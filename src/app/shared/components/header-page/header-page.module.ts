import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@NgModule({
    exports: [
        HeaderPageComponent
    ],
    imports: [
        CommonModule,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
        RouterLink,
        HeaderPageComponent,
    ]
})
export class HeaderPageModule {}
