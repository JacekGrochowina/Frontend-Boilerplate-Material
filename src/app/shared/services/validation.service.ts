import { Injectable } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";
import { first } from "lodash";

enum ValidationMessage {
  email = 'Nieprawidłowy format adresu email',
  required = 'To pole jest wymagane',
  matchingValue = 'Nie pasująca wartość',
}

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  public getErrorMessage(formControl: FormControl): null | undefined {
    if (formControl && formControl.errors) {
      return first(
        Object.keys(formControl.errors).map((key) =>
          ValidationService.getValidationMessage(key, formControl.errors?.[key] as ValidationErrors | undefined)
        )
      )
    }
    return null;
  }

  private static getValidationMessage(key: string, validationErrors?: ValidationErrors): never {
    return ValidationMessage[key as keyof object];
  }
}
