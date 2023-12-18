import { Component } from '@angular/core';

import { AuthWrapperComponent } from '@shared/components/auth-wrapper/auth-wrapper.component';
import { LoginFormComponent } from '@pages/login/components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [AuthWrapperComponent, LoginFormComponent]
})
export class LoginComponent {}
