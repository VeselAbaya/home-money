import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BillComponent } from './pages/bill/bill.component';
import { HistoryComponent } from './pages/history/history.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { RecordsComponent } from './pages/records/records.component';
import { SwipeEmitterDirective } from './swipeEmitter/swipe-emitter.directive';

@NgModule({
  declarations: [
    MainComponent,
    BillComponent,
    HistoryComponent,
    PlanningComponent,
    RecordsComponent,

    SwipeEmitterDirective
  ],
  imports: [
    CommonModule,
    FormsModule,

    MainRoutingModule
  ]
})
export class MainModule {}
