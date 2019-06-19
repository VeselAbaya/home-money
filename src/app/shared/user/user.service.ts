import { IUser } from './user.interface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  signUp(email: string, password: string, name: string): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/users`, {
      email, password, name
    }, { observe: 'response' }).pipe(
      map((response: HttpResponse<IUser>) => response.headers.get('X-Auth'))
    );
  }

  signIn(email: string, password: string) {
    return this.httpClient.post(`${environment.serverURL}/users/login`, {
      email, password
    }, { observe: 'response' }).pipe(
      map((response: HttpResponse<IUser>) => response.headers.get('X-Auth'))
    );
  }
}
