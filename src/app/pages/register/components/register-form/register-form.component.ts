import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { InputPasswordComponent } from '@shared/components/input-password/input-password.component';
import { InputComponent } from '@shared/components/input/input.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import {
  RegisterFormControlType,
  RegisterFormGroupType,
  RegisterType
} from '@pages/register/components/register-form/types';
import { AuthFacade } from '@store/auth/auth.facade';
import { CustomValidators } from '@shared/utils/validators/custom-validators';
import { AppRouting } from '@app/utils';
import { IRegisterRequest } from '@store/auth/interfaces';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    InputPasswordComponent,
    RouterLink,
    ButtonComponent,
    AsyncPipe
  ]
})
export class RegisterFormComponent {

  protected loading$ = this.authFacade.loading$;
  protected formGroup!: RegisterFormGroupType;

  @Output() submitted = new EventEmitter<void>();

  constructor(
    private authFacade: AuthFacade,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group<RegisterFormControlType>({
      firstName: this.formBuilder.control('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      lastName: this.formBuilder.control('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      email: this.formBuilder.control('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true
      }),
      password: this.formBuilder.control('', {
        validators: [
          Validators.required,
          CustomValidators.matchValues('confirmPassword', true)
        ],
        nonNullable: true
      }),
      confirmPassword: this.formBuilder.control('', {
        validators: [
          Validators.required,
          CustomValidators.matchValues('password')
        ],
        nonNullable: true
      })
    });
  }

  protected get loginPage() {
    return `./../${AppRouting.login}`;
  }

  protected get name(): FormControl<RegisterType['firstName']> {
    return this.formGroup.controls.firstName;
  }

  protected get surname(): FormControl<RegisterType['lastName']> {
    return this.formGroup.controls.lastName;
  }

  protected get email(): FormControl<RegisterType['email']> {
    return this.formGroup.controls.email;
  }

  protected get password(): FormControl<RegisterType['password']> {
    return this.formGroup.controls.password;
  }

  protected get confirmPassword(): FormControl<RegisterType['confirmPassword']> {
    return this.formGroup.controls.confirmPassword;
  }

  protected get isSubmitDisabled$(): Observable<boolean> {
    return combineLatest([
      of(this.formGroup.invalid),
      this.loading$
    ]).pipe(
      map(([isInvalidForm, isLoading]) => isInvalidForm || isLoading)
    );
  }

  protected handleSubmit(): void {
    const request = this.getRequestValue();
    this.authFacade.register(request);

    this.submitted.emit();
  }

  private getRequestValue(): IRegisterRequest {
    const {
      firstName,
      lastName,
      email,
      password
    } = this.formGroup.getRawValue();

    return {
      firstName,
      lastName,
      email,
      password
    };
  }
}
