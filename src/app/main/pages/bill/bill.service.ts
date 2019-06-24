import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BillService {
  constructor(private httpClient: HttpClient) {}
}
