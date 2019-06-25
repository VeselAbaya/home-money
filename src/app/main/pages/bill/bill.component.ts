import { Component, OnInit } from '@angular/core';
import { IBill } from './service/bill.interface';
import { BillService } from './service/bill.service';
import { IRates } from './service/rates.interface';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  bill: IBill;
  rates: IRates;

  constructor(private billService: BillService) {}

  ngOnInit() {
    this.billService.getBill().subscribe(bill => {
      this.bill = bill;
      this.billService.getCurrencyFactors(bill.currency).subscribe(rates => {
        this.rates = rates;
      });
    });
  }
}
