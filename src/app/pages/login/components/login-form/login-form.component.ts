import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { LoginFormControlType, LoginFormGroupType } from './types';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRouting } from '../../../../utils';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { InputPasswordComponent } from '../../../../shared/components/input-password/input-password.component';
import { InputComponent } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    InputPasswordComponent,
    RouterLink,
    ButtonComponent,
  ],
})
export class LoginFormComponent {

  protected formGroup!: LoginFormGroupType;
  @Output() submitted = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group<LoginFormControlType>({
      email: this.formBuilder.control(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: this.formBuilder.control(null, {
        validators: [Validators.required]
      }),
    });
  }

  protected get registerPage() {
    return `./../${AppRouting.register}`;
  }

  protected get email(): FormControl<string | null> {
    return this.formGroup.controls.email;
  }

  protected get password(): FormControl<string | null> {
    return this.formGroup.controls.password;
  }

  protected handleSubmit() {
    this.submitted.emit();
  }
}
