import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.scss']
})
export class RecordFormComponent  {
  private recordForm = new FormGroup({
    category: new FormControl(null, Validators.required),
    recordType: new FormControl('income'),
    value: new FormControl(null, Validators.required)
  });

  onSubmit() {
    console.log(this.recordForm.value);
  }
}
