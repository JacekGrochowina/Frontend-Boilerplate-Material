import { Component } from '@angular/core';
import { AuthWrapperComponent } from '@shared/components/auth-wrapper/auth-wrapper.component';
import { RegisterFormComponent } from '@pages/register/components/register-form/register-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: true,
  imports: [AuthWrapperComponent, RegisterFormComponent]
})
export class RegisterComponent {}
