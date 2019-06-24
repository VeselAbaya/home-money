import { IUser } from './user.interface';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  signUp(email: string, password: string, name: string): Observable<string> {
    const url = `${environment.serverURL}/users`;
    const body = {email, password, name};

    return this.httpClient.post(url, body, {observe: 'response'}).pipe(
      map((response: HttpResponse<IUser>) => response.headers.get('X-Auth'))
    );
  }

  signIn(email: string, password: string) {
    const url = `${environment.serverURL}/users/login`;
    const body = {email, password};

    return this.httpClient.post(url, body, { observe: 'response' }).pipe(
      map((response: HttpResponse<IUser>) => response.headers.get('X-Auth'))
    );
  }

  emailAlreadyExists(email: string) {
    const url = `${environment.serverURL}/users/email-exists/${email}`;
    return this.httpClient.get(url);
  }

  getUser() {
    const url = `${environment.serverURL}/users/me`;
    const headers = new HttpHeaders({'X-Auth': localStorage.getItem('token')});

    return this.httpClient.get<IUser>(url, { headers });
  }
}
