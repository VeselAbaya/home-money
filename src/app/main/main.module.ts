import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

import { BillComponent } from './pages/bill/bill.component';
import { BillService } from './pages/bill/service/bill.service';
import { BillCardComponent } from './pages/bill/bill-card/bill-card.component';
import { CurrencyCardComponent } from './pages/bill/currency-card/currency-card.component';

import { HistoryComponent } from './pages/history/history.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { RecordsComponent } from './pages/records/records.component';

import { SwipeEmitterDirective } from './swipeEmitter/swipe-emitter.directive';

@NgModule({
  declarations: [
    MainComponent,
    NavigationComponent,
    HeaderComponent,

    BillComponent,
    BillCardComponent,
    CurrencyCardComponent,

    HistoryComponent,
    PlanningComponent,
    RecordsComponent,

    SwipeEmitterDirective
  ],
  imports: [
    CommonModule,
    FormsModule,

    MainRoutingModule
  ],
  providers: [BillService]
})
export class MainModule {}
