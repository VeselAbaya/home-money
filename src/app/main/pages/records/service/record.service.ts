import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

import { ICategory } from './category.interface';
import { IRecord } from './record.interface';

@Injectable()
export class RecordService {
  private _categories: ICategory[];
  public categories$ = new Subject<ICategory[]>();

  constructor(private httpClient: HttpClient) {}

  get categories(): Subject<ICategory[]> {
    if (this._categories) {
      return this.categories$;
    }

    const url = `${environment.serverURL}/categories`;

    this.httpClient.get<ICategory[]>(url).subscribe((categories) => {
      this._categories = categories;
      this.categories$.next(this._categories);
    });

    return this.categories$;
  }

  createCategory(category: ICategory): Observable<ICategory> {
    const url = `${environment.serverURL}/categories`;

    return this.httpClient.post<ICategory>(url, category)
      .pipe(
        tap((newCategory) => {
          newCategory.oneTimeLimit = newCategory.oneTimeLimit === null ? Infinity : newCategory.oneTimeLimit;

          this._categories.push(newCategory);
          this.categories$.next(this._categories);
        })
      );
  }

  createRecord(record: IRecord) {
    const url = `${environment.serverURL}/records`;

    return this.httpClient.post<IRecord>(url, record);
  }

  updateCategory(categoryId: string, oneTimeLimit: number, periodLimit: number) {
    const url = `${environment.serverURL}/categories/${categoryId}`;
    const body = { oneTimeLimit, periodLimit };

    return this.httpClient.patch<ICategory>(url, body)
      .pipe(
        tap(updatedCategory => {
          ['oneTimeLimit', 'periodLimit'].forEach(limit => {
            this._categories.find( // find updated category and update it's limits
              category => updatedCategory.name === category.name
            )[limit] = limit;
          });

          this.categories$.next(this._categories);
        })
      );
  }
}
