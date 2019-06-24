import { Component } from '@angular/core';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {
  constructor(private billService: BillService) {

  }
}
