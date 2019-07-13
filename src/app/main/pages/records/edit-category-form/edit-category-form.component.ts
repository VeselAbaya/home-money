import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecordService } from '../service/record.service';
import { ICategory } from '../service/category.interface';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.scss']
})
export class EditCategoryFormComponent implements OnInit {
  private editCategoryForm = new FormGroup({
    category: new FormControl(null, Validators.required),
    oneTimeLimit: new FormControl(null, Validators.min(1)),
    periodLimit: new FormControl(null, Validators.min(1))
  });

  constructor(private recordService: RecordService) {}

  ngOnInit() {
    this.editCategoryForm.get('category').valueChanges.subscribe((category: ICategory) => {
      ['oneTimeLimit', 'periodLimit'].forEach(limit => {
        if (category[limit] !== Infinity) {
          this.editCategoryForm.get(limit).setValue(category[limit]);
        }
      });
    });
  }

  onSubmit() {
    const form = this.editCategoryForm.value;
    this.recordService.updateCategory(form.category._id, form.oneTimeLimit, form.periodLimit)
      .subscribe(() => {
        this.editCategoryForm.reset();
      });
  }
}
