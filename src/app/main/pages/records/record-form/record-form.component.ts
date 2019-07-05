import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecordService } from '../service/record.service';
import { CategoryLimitValidator } from './category-limit.validator';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.scss']
})
export class RecordFormComponent {
  private recordForm = new FormGroup({
    category: new FormControl(null, Validators.required),
    type: new FormControl('income'),
    value: new FormControl(null, [
      Validators.required,
      Validators.min(1)
    ]),
    comment: new FormControl(null)
  }, CategoryLimitValidator);

  constructor(private recordService: RecordService) {}

  onSubmit() {
    this.recordService.createRecord(this.recordForm.value).subscribe();
  }
}
