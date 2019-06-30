import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecordService } from '../service/record.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
  private categoryForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    limit: new FormControl(null)
  });

  constructor(private recordService: RecordService) {}

  onSubmit() {
    this.recordService.createCategory(this.categoryForm.value).subscribe();
  }
}
