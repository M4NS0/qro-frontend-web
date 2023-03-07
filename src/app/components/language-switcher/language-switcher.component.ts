import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent  {


  currentLang: string = 'en';

  changeLang(lang: string) {
    this.currentLang = lang;

    // Remove the "chosen" class from the previously selected language
    const chosenElem = document.querySelector('.lang.chosen');
    if (chosenElem) {
      chosenElem.classList.remove('chosen');
    }

    // Add the "chosen" class to the newly selected language
    const langElem = document.querySelector(`.lang[data-lang="${lang}"]`);
    if (langElem) {
      langElem.classList.add('chosen');
    }

    // TODO: Write code to change the language of the application
  }
}