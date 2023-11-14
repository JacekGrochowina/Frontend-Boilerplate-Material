import { Component } from '@angular/core';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthWrapperComponent } from '../../shared/components/auth-wrapper/auth-wrapper.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: true,
  imports: [AuthWrapperComponent, RegisterFormComponent]
})
export class RegisterComponent {}
