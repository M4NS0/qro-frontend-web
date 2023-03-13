import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentLanguage: string = 'pt-BR';
  constructor() { }

  ngOnInit(): void {
  }

  switchLanguage(event: any) {
    this.currentLanguage = event;
  }

}


