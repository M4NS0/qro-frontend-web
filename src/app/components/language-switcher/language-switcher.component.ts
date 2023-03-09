import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent  {

  constructor() { }

  languageSwitch: boolean = true;

  @Output() switchChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onSwitchChange(event: any) {
    this.languageSwitch = event.target.checked;
    this.switchChange.emit(this.languageSwitch);
  }
}
