import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BillService {
  constructor(private httpClient: HttpClient) {}

  getBill(): Observable<> {

  }
}
