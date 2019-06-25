import { Component, Input } from '@angular/core';
import { IRates } from '../service/rates.interface';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {
  @Input() rates: IRates;
}
