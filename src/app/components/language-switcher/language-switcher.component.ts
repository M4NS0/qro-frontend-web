import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent  implements OnInit{
  languageSwitch!: boolean;
  @Output() switchChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private translateService: TranslateService) { 
  }

  ngOnInit(): void {
    this.languageSwitch = true;
  }

  onSwitchChange(event: any) {
    this.languageSwitch = event.target.checked;
    this.switchChangeEvent.emit(this.languageSwitch);
  }
}
