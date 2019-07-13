import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ICategory } from './category.interface';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IRecord } from './record.interface';

@Injectable()
export class RecordService {
  private _categories: ICategory[];
  public categories = new Subject<ICategory[]>();

  constructor(private httpClient: HttpClient) {}

  uploadCategories(): Observable<ICategory[]> {
    const url = `${environment.serverURL}/categories`;
    const headers = new HttpHeaders({
      'X-Auth': localStorage.getItem('token')
    });

    return this.httpClient.get<ICategory[]>(url, { headers }).pipe(
      tap(categories => {
        this._categories = categories;
        this.categories.next(this._categories);
      })
    );
  }

  createCategory(category: ICategory): Observable<ICategory> {
    const url = `${environment.serverURL}/categories`;

    const headers = new HttpHeaders({
      'X-Auth': localStorage.getItem('token')
    });

    return this.httpClient.post<ICategory>(url, category, { headers })
      .pipe(
        tap((newCategory) => {
          newCategory.oneTimeLimit = newCategory.oneTimeLimit === null ? Infinity : newCategory.oneTimeLimit;

          this._categories.push(newCategory);
          this.categories.next(this._categories);
        })
      );
  }

  createRecord(record: IRecord) {
    const url = `${environment.serverURL}/records`;
    const headers = new HttpHeaders({
      'X-Auth': localStorage.getItem('token')
    });

    return this.httpClient.post<IRecord>(url, record, { headers });
  }

  updateCategory(categoryId: string, oneTimeLimit: number, periodLimit: number) {
    const url = `${environment.serverURL}/categories/${categoryId}`;
    const body = { oneTimeLimit, periodLimit };
    const headers = new HttpHeaders({
      'X-Auth': localStorage.getItem('token')
    });

    return this.httpClient.patch<ICategory>(url, body, { headers })
      .pipe(
        tap(updatedCategory => {
          ['oneTimeLimit', 'periodLimit'].forEach(limit => {
            this._categories.find( // find updated category and update it's limits
              category => updatedCategory.name === category.name
            )[limit] = limit;
          });

          this.categories.next(this._categories);
        })
      );
  }
}
