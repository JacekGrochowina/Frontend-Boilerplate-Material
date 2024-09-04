import { ValidatorFn } from '@angular/forms';
import { matchValuesValidator } from '@shared/utils/validators/methods';

export class CustomValidators {
  static matchValues(matchTo: string, reverse?: boolean): ValidatorFn {
    return matchValuesValidator(matchTo, reverse);
  }
}
