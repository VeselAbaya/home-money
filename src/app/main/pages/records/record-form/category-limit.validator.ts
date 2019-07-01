import { AbstractControl } from '@angular/forms';

export const CategoryLimitValidator = (recordForm: AbstractControl) => {
  const categoryControl = recordForm.get('category');
  const valueControl = recordForm.get('value');

  if (valueControl.value && categoryControl.value) {
    const record = valueControl.value;
    const categoryLimit = categoryControl.value.limit;
    if (record > categoryLimit) {
      const error = {
        categoryLimit: {category: categoryControl.value, actualValue: record},
      };

      valueControl.setErrors(error);

      return error;
    }
  }

  return null;
};
