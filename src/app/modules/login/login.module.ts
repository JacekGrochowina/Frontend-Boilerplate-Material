import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from "./login-routing.module";
import { AuthWrapperModule } from "../../shared/components/auth-wrapper";
import { LoginFormModule } from "./components/login-form";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AuthWrapperModule,
    LoginFormModule,
  ]
})
export class LoginModule {}
