import { Component, Input, OnInit } from '@angular/core';
import { IBill } from '../service/bill.interface';
import { IRates } from '../service/rates.interface';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent {
  @Input() bill: IBill;
  @Input() rates: IRates;
}
