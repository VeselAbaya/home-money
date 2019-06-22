import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BillComponent } from './bill/bill.component';
import { HistoryComponent } from './history/history.component';
import { PlanningComponent } from './planning/planning.component';
import { RecordsComponent } from './records/records.component';

@NgModule({
  declarations: [
    MainComponent,
    BillComponent,
    HistoryComponent,
    PlanningComponent,
    RecordsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    MainRoutingModule
  ]
})
export class MainModule {}
