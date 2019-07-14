import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSharedModule } from '../../shared/main-shared.module';

import { BillComponent } from './bill.component';
import { BillCardComponent } from './bill-card/bill-card.component';
import { CurrencyCardComponent } from './currency-card/currency-card.component';

import { BillService } from './service/bill.service';

@NgModule({
  declarations: [
    BillComponent,
    BillCardComponent,
    CurrencyCardComponent
  ],
  imports: [
    CommonModule,

    MainSharedModule
  ],
  providers: [BillService]
})
export class BillModule {}
