import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs/operators';

import { RecordService } from '../../service/record.service';

@Injectable()
export class CategoryAlreadyExistsValidator {
  static create(recordService: RecordService) {
    return (categoryNameControl: AbstractControl) => {
      return recordService.categories.pipe(
        map(categories => {
          const categoryNames = categories.map(category => category.name);
          if (categoryNames.includes(categoryNameControl.value)) {
            return {categoryAlreadyExists: categoryNameControl.value};
          }

          return null;
        }),
        first()
      );
    };
  }
}
