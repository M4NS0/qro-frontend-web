import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent  {

  currentLanguage: string = 'pt-BR';
  @Output() currentLanguageEvent = new EventEmitter<String>();

  constructor(private translate: TranslateService) { }

  onSwitchChange(languageSwitch: boolean) {
    this.currentLanguage = languageSwitch ? 'pt-BR' : 'en-US';
    this.currentLanguageEvent.emit(this.currentLanguage);
  }
}
