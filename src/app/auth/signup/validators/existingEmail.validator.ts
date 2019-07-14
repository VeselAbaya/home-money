import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';

import { UserService } from '../../../shared/user/user.service';

export class ExistingEmailValidator {
  static create(userService: UserService) {
    return (control: AbstractControl) => {
      return userService.emailAlreadyExists(control.value)
        .pipe(
          map(emailExists => emailExists ? {'emailExists': control.value} : null)
        );
    };
  }
}
