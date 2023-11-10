import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterFormControlType, RegisterFormGroupType } from './types/register-form.type';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppRouting } from '../../../../utils';
import { CustomValidators } from '../../../../shared/utils/validators/custom-validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {

  protected formGroup!: RegisterFormGroupType;
  @Output() submitted = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group<RegisterFormControlType>({
      name: this.formBuilder.control(null, {
        validators: [Validators.required]
      }),
      surname: this.formBuilder.control(null, {
        validators: [Validators.required]
      }),
      email: this.formBuilder.control(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: this.formBuilder.control(null, {
        validators: [
          Validators.required,
          CustomValidators.matchValues('confirmPassword', true)
        ]
      }),
      confirmPassword: this.formBuilder.control(null, {
        validators: [
          Validators.required,
          CustomValidators.matchValues('password')
        ]
      }),
    });
  }

  protected get loginPage() {
    return `./../${AppRouting.login}`;
  }

  protected get name(): FormControl<string | null> {
    return this.formGroup.controls.name;
  }

  protected get surname(): FormControl<string | null> {
    return this.formGroup.controls.surname;
  }

  protected get email(): FormControl<string | null> {
    return this.formGroup.controls.email;
  }

  protected get password(): FormControl<string | null> {
    return this.formGroup.controls.password;
  }

  protected get confirmPassword(): FormControl<string | null> {
    return this.formGroup.controls.confirmPassword;
  }

  protected handleSubmit() {
    this.submitted.emit();
  }
}