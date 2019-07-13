import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecordService } from '../service/record.service';
import { CategoryAlreadyExistsValidator } from './category-already-exists.validator';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
  private categoryForm = new FormGroup({
    name: new FormControl(null,
      Validators.required,
      CategoryAlreadyExistsValidator.create(this.recordService)
    ),
    oneTimeLimit: new FormControl(null, Validators.min(1)),
    periodLimit: new FormControl(null, Validators.min(1))
  });

  constructor(private recordService: RecordService) {}

  onSubmit() {
    this.recordService.createCategory(this.categoryForm.value)
      .subscribe(() => {
        this.categoryForm.reset();
      });
  }
}
