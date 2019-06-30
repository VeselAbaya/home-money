import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ICategory } from './category.interface';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IRecord } from './record.interface';

@Injectable()
export class RecordService {
  categoryCreated$ = new Subject<ICategory>();

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    const url = `${environment.serverURL}/categories`;
    const headers = new HttpHeaders({
      'X-Auth': localStorage.getItem('token')
    });

    return this.httpClient.get<ICategory[]>(url, { headers });
  }

  createCategory(category: ICategory): Observable<ICategory> {
    const url = `${environment.serverURL}/categories`;
    const body: ICategory = {name: category.name};
    if (category.limit) { body.limit = category.limit; }

    const headers = new HttpHeaders({
      'X-Auth': localStorage.getItem('token')
    });

    return this.httpClient.post<ICategory>(url, body, { headers })
      .pipe(
        tap((newCategory) => this.categoryCreated$.next(newCategory))
      );
  }

  createRecord(record: IRecord) {
    const url = `${environment.serverURL}/records`;
    const headers = new HttpHeaders({
      'X-Auth': localStorage.getItem('token')
    });

    return this.httpClient.post<IRecord>(url, record, { headers });
  }
}
