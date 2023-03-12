import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'http://localhost:8080/auth';
  private JWT_TOKEN = 'jwtToken';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post(url, user);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  removeToken(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  getAuthStatus(): boolean {
    return !!this.getToken();
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }
  
}
