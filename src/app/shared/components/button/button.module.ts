import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterLink],
  exports: [ButtonComponent],
})
export class ButtonModule {}
