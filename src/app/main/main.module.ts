import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainSharedModule } from './shared/main-shared.module';

import { RecordsModule } from './pages/records/records.module';
import { BillModule } from './pages/bill/bill.module';
import { PlanningModule } from './pages/planning/planning.module';
import { HistoryModule } from './pages/history/history.module';

import { MainComponent } from './main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

import { SwipeEmitterDirective } from './swipeEmitter/swipe-emitter.directive';

@NgModule({
  declarations: [
    MainComponent,
    NavigationComponent,
    HeaderComponent,
    SwipeEmitterDirective
  ],
  imports: [
    CommonModule,

    MainRoutingModule,
    MainSharedModule,

    RecordsModule,
    BillModule,
    PlanningModule,
    HistoryModule
  ]
})
export class MainModule {}
