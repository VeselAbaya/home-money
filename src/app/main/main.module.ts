import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainSharedModule } from './shared/main-shared.module';

import { MainComponent } from './main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

import { RecordsModule } from './pages/records/records.module';

import { BillComponent } from './pages/bill/bill.component';
import { BillService } from './pages/bill/service/bill.service';
import { BillCardComponent } from './pages/bill/bill-card/bill-card.component';
import { CurrencyCardComponent } from './pages/bill/currency-card/currency-card.component';

import { HistoryComponent } from './pages/history/history.component';
import { PlanningComponent } from './pages/planning/planning.component';

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

    SwipeEmitterDirective
  ],
  imports: [
    CommonModule,

    MainRoutingModule,
    MainSharedModule,

    RecordsModule
  ],
  providers: [
    BillService
  ]
})
export class MainModule {}
