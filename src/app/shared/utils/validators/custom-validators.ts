import { ValidatorFn } from '@angular/forms';
import { matchValuesValidator } from '@shared/utils/validators/methods/match-values.validator';

export class CustomValidators {
  static matchValues(matchTo: string, reverse?: boolean): ValidatorFn {
    return matchValuesValidator(matchTo, reverse);
  }
}
