import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  public progress: number = 0;
  public showSplashScreen: boolean = true;

  constructor(private translate: TranslateService) { 
    
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en-US');
    this.translate.use('en-US');

    const interval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(interval);
        this.showSplashScreen = false;
      }
    }, 500);
  }


}
