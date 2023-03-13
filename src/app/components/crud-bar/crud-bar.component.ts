import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-crud-bar',
  templateUrl: './crud-bar.component.html',
  styleUrls: ['./crud-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CrudBarComponent implements OnInit {

  isQrCreation: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }
}
