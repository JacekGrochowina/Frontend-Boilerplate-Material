import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from "./register-routing.module";
import { AuthWrapperModule } from "../../shared/components/auth-wrapper";
import { RegisterFormModule } from "./components/register-form";

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AuthWrapperModule,
    RegisterFormModule,
  ]
})
export class RegisterModule {}
