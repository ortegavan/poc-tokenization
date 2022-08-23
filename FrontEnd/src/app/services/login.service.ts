import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'https://localhost:7257/api/login';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(this.url, JSON.stringify({ email, password }), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }
}
