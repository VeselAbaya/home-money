import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ICategory } from './category.interface';
import { Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IRecord } from './record.interface';

@Injectable()
export class RecordService {
  private _categories: ICategory[];
  public categories = new Subject<ICategory[]>();

  constructor(private httpClient: HttpClient) {}

  loadCategories(): Observable<ICategory[]> {
    const url = `${environment.serverURL}/categories`;
    const headers = new HttpHeaders({
      'X-Auth': localStorage.getItem('token')
    });

    return this.httpClient.get<ICategory[]>(url, { headers }).pipe(
      map(categories => {
        return categories.map(category => {
          category.limit = category.limit === null ? Infinity : category.limit;
          return category;
        });
      }),
      tap(categories => {
        this._categories = categories;
        this.categories.next(this._categories);
      })
    );
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
        tap((newCategory) => {
          newCategory.limit = newCategory.limit === null ? Infinity : newCategory.limit;

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

  updateCategory(categoryId: string, limit: number) {
    const url = `${environment.serverURL}/categories/${categoryId}`;
    const headers = new HttpHeaders({
      'X-Auth': localStorage.getItem('token')
    });

    return this.httpClient.patch<ICategory>(url, { limit }, { headers })
      .pipe(
        tap(updatedCategory => {
          this._categories.find(
            category => updatedCategory.name === category.name
          ).limit = limit;

          this.categories.next(this._categories);
        })
      );
  }
}
