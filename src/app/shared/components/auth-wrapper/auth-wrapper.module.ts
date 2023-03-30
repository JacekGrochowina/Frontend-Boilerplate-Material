import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWrapperComponent } from './auth-wrapper.component';
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AuthWrapperComponent
  ],
  exports: [
    AuthWrapperComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AuthWrapperModule {}
