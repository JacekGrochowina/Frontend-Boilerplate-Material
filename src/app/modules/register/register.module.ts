import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from "./register-routing.module";
import { AuthWrapperModule } from "../../shared/components/auth-wrapper";

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AuthWrapperModule,
  ]
})
export class RegisterModule {}
