import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

import { IBill } from './bill.interface';
import { IRates } from './rates.interface';

@Injectable()
export class BillService {
  constructor(private httpClient: HttpClient) {}

  getBill(): Observable<IBill> {
    const url = `${environment.serverURL}/bill`;
    const headers = new HttpHeaders({'X-Auth': localStorage.getItem('token')});

    return this.httpClient.get<IBill>(url, { headers });
  }

  getCurrencyFactors(currency: 'RUB' | 'USD' | 'EUR' = 'RUB'): Observable<IRates> {
    const url = `http://data.fixer.io/api/latest?access_key=${environment.fixerAPIKey}`;

    return this.httpClient.get<any>(url).pipe(map((res) => {
      let rates: IRates = {RUB: null, USD: null, EUR: null, date: null};
      switch (currency) {
        case 'EUR':
          rates['EUR'] = 1;
          rates = {...res.rates, date: res.date};
        break;
        case 'RUB':
          rates['RUB'] = 1;
          rates['EUR'] = 1 / res.rates['RUB'];

          const USDtoEUR = 1 / res.rates['USD'];
          rates['USD'] = rates['EUR'] / USDtoEUR;

          rates.date = res.date;
        break;
        case 'USD':
          rates['USD'] = 1;
          rates['EUR'] = 1 / res.rates['USD'];

          const RUBtoEUR = 1 / res.rates['RUB'];
          rates['RUB'] = rates['EUR'] / RUBtoEUR;

          rates.date = res.date;
        break;
      }

      return rates;
    }));
  }
}
