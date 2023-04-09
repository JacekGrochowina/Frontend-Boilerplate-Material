import { Component, EventEmitter, Output } from '@angular/core';
import { LoginFormControlType, LoginFormGroupType } from "./types";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Routing } from "../../../../shared/utils/enums";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
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

  public getFormGroup(): LoginFormGroupType {
    return this.formGroup;
  }

  protected get registerPage() {
    return `./../${Routing.register}`;
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
