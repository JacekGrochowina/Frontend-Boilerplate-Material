import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { InputComponent } from '@shared/components/input/input.component';
import { InputPasswordComponent } from '@shared/components/input-password/input-password.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { LoginFormControlType, LoginFormGroupType, LoginType } from '@pages/login/components/login-form/types';
import { AuthFacade } from '@store/auth/auth.facade';
import { AppRouting } from '@app/utils';
import { ILoginRequest } from '@store/auth/interfaces/login-request.interface';

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
    ButtonComponent
  ]
})
export class LoginFormComponent {

  protected loading$ = this.authFacade.loading$;
  protected formGroup!: LoginFormGroupType;

  @Output() submitted = new EventEmitter<void>();

  constructor(
    private authFacade: AuthFacade,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group<LoginFormControlType>({
      email: this.formBuilder.control('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true
      }),
      password: this.formBuilder.control('', {
        validators: [Validators.required],
        nonNullable: true
      })
    });
  }

  protected get registerPage() {
    return `./../${AppRouting.register}`;
  }

  protected get email(): FormControl<LoginType['email']> {
    return this.formGroup.controls.email;
  }

  protected get password(): FormControl<LoginType['password']> {
    return this.formGroup.controls.password;
  }

  protected get isSubmitDisabled$(): Observable<boolean> {
    return combineLatest([
      of(this.formGroup.invalid),
      this.loading$
    ]).pipe(
      map(([isInvalidForm, isLoading]) => isInvalidForm || isLoading)
    );
  }

  protected handleSubmit() {
    const request = this.getRequestValue();
    this.authFacade.login(request);

    this.submitted.emit();
  }

  private getRequestValue(): ILoginRequest {
    const {
      email,
      password
    } = this.formGroup.getRawValue();

    return {
      email,
      password
    };
  }
}
