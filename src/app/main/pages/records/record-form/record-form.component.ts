import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from '../service/category.interface';
import { RecordService } from '../service/record.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.scss']
})
export class RecordFormComponent implements OnInit, OnDestroy {
  categories: ICategory[];
  private categoryCreatedSubscr: Subscription;

  private recordForm = new FormGroup({
    categoryName: new FormControl(null, Validators.required),
    type: new FormControl('income'),
    value: new FormControl(null, Validators.required)
  });

  constructor(private recordService: RecordService) {}

  ngOnInit() {
    this.recordService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.recordForm.controls['categoryName'].setValue(categories[0].name);
    });

    this.categoryCreatedSubscr = this.recordService.categoryCreated$
      .subscribe(category => {
        this.categories.push(category);
        if (this.categories.length === 1) {
          this.recordForm.controls['categoryName'].setValue(category.name);
        }
      });
  }

  ngOnDestroy() {
    this.categoryCreatedSubscr.unsubscribe();
  }

  onSubmit() {
    this.recordService.createRecord(this.recordForm.value).subscribe(
      res => console.log(res)
    );
  }
}
