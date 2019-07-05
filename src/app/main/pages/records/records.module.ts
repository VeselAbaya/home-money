import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecordFormComponent } from './record-form/record-form.component';
import { RecordsComponent } from './records.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { EditCategoryFormComponent } from './edit-category-form/edit-category-form.component';

import { RecordService } from './service/record.service';
import { MainSharedModule } from '../../shared/main-shared.module';

@NgModule({
  declarations: [
    RecordsComponent,
    RecordFormComponent,
    CategoryFormComponent,
    EditCategoryFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MainSharedModule
  ],
  providers: [
    RecordService
  ]
})
export class RecordsModule {}
