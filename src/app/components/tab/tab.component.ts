import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TabComponent implements OnChanges {
  @Input() currentLanguage = '';
  selectedProduct: Product[] = [];

  constructor(private translateService: TranslateService) { 
  }

  newSelection(selection: Product[]) {
    this.selectedProduct = selection;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentLanguage']) {
      this.translateService.use(this.currentLanguage);
    }
  }
}
