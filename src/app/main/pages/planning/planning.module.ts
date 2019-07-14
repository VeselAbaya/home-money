import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSharedModule } from '../../shared/main-shared.module';

import { PlanningComponent } from './planning.component';
import { CategoryBarDirective } from './category-bar.directive';

@NgModule({
  declarations: [
    PlanningComponent,
    CategoryBarDirective
  ],
  imports: [
    CommonModule,

    MainSharedModule
  ]
})
export class PlanningModule {}
