import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from '../service/category.interface';
import { RecordService } from '../service/record.service';
import { Subscription } from 'rxjs';
import { CategoryLimitValidator } from './category-limit.validator';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.scss']
})
export class RecordFormComponent implements OnInit, OnDestroy {
  categories: ICategory[];
  private categoryCreatedSubscr: Subscription;

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

  ngOnInit() {
    this.recordService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.recordForm.controls['category'].setValue(categories[0]);
    });

    this.categoryCreatedSubscr = this.recordService.categoryCreated$
      .subscribe(category => {
        this.categories.push(category);
        if (this.categories.length === 1) {
          this.recordForm.controls['category'].setValue(category);
        }
      });
  }

  ngOnDestroy() {
    this.categoryCreatedSubscr.unsubscribe();
  }

  onSubmit() {
    this.recordService.createRecord(this.recordForm.value).subscribe();
  }
}
