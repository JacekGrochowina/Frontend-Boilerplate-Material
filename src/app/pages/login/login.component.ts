import { Component } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthWrapperComponent } from '../../shared/components/auth-wrapper/auth-wrapper.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [AuthWrapperComponent, LoginFormComponent]
})
export class LoginComponent {}
