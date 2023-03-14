import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.router.navigate(['splash-screen']);
      this.checkTokenExpiration();

      setTimeout(() => {
        this.router.navigate(['login']);
        resolve(true);
      }, 3000);
    });
  }

  checkTokenExpiration() {

    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = jwt_decode(token) as DecodedToken;
      if (decodedToken.exp < Date.now() / 1000) {
        localStorage.removeItem('jwtToken');
      }
    }
  }
}

interface DecodedToken {
  sub: string;
  exp: number;
  iat: number;
}
