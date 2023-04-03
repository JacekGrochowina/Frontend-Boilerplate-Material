import { Injectable } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";
import { first } from "lodash";

enum ValidationMessage {
  email = 'Nieprawidłowy format adresu email',
  required = 'To pole jest wymagane',
}

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  public getErrorMessage(formControl: FormControl) {
    if (formControl && formControl.errors) {
      return first(
        Object.keys(formControl.errors).map((key) =>
          ValidationService.getValidationMessage(key, formControl.errors?.[key] as ValidationErrors | undefined)
        )
      )
    }
    return null;
  }

  private static getValidationMessage(key: string, validationErrors?: ValidationErrors) {
    return ValidationMessage[key as keyof object];
  }
}
