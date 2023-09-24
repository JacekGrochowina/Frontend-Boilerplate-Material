import { FormControl, FormGroup } from "@angular/forms";

export type LoginType = {
  email: string | null;
  password: string | null;
}

export type LoginFormGroupType = FormGroup<{
  email: FormControl<LoginType['email']>;
  password: FormControl<LoginType['email']>;
}>;

export type LoginFormControlType = LoginFormGroupType['controls'];
