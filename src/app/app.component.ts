import { Component } from '@angular/core';
import { LoadingGuard } from './guards/loading.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public progress: number = 0;
  showSplashScreen = true;

  constructor(private loadingGuard: LoadingGuard) {}

  ngOnInit() {
  
    this.loadingGuard.canActivate().then(() => {
      this.showSplashScreen = false;
    });

    
  }



}
