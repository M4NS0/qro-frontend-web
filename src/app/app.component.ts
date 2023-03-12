import { Component } from '@angular/core';
import { LoadingGuard } from './guards/loading.guard';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public progress: number = 0;
  showSplashScreen = true;


  constructor(private loadingGuard: LoadingGuard) { }

  ngOnInit() {

    this.loadingGuard.canActivate().then(() => {
      this.showSplashScreen = false;
    });

    this.checkTokenExpiration();
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