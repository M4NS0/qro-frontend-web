import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  showSplashScreen = true;

  constructor(private spinner: NgxSpinnerService) {}


  ngOnInit(): void {
    this.spinner.show();

    interval(1000)
      .pipe(take(3))
      .subscribe(() => {
        this.showSplashScreen = false;
        this.spinner.hide();
      });
  }
}
