import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form.component';
import { InputModule } from "../../../../shared/components/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputPasswordModule } from "../../../../shared/components/input-password";
import { ButtonModule } from "../../../../shared/components/button";


@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  exports: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule,
    InputPasswordModule
  ]
})
export class RegisterFormModule {}
