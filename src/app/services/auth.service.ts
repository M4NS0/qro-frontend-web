import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'http://localhost:8080/api';
  private LOGIN_URL = `${this.BASE_URL}/login`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>(this.LOGIN_URL, {username, password}).pipe(
      map(result => {
        localStorage.setItem('access_token', result.token);
        return true;
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
