import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-crud-bar',
  templateUrl: './crud-bar.component.html',
  styleUrls: ['./crud-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CrudBarComponent implements OnInit {

  @Input() product: Product[] = [];
  @Output() productChangeEvent = new EventEmitter<Product[]>();
  selectedProduct: string = '';
  isQrCreation: boolean = true;

  constructor() {
    this.product = [
      { id: 1, name: 'Option 1', advertisement: 'Advertisement 1', email: 'email1', homepage: 'homepage1', whatsapp: 'whatsapp1', telegram: 'telegram1', facebook: 'facebook1', instagram: 'instagram1', youtube: 'youtube1', voucher: 'voucher1', positionX: 1, positionY: 1 },
      { id: 2, name: 'Option 2', advertisement: 'Advertisement 2', email: 'email2', homepage: 'homepage2', whatsapp: 'whatsapp2', telegram: 'telegram2', facebook: 'facebook2', instagram: 'instagram2', youtube: 'youtube2', voucher: 'voucher2', positionX: 2, positionY: 2 },
      { id: 3, name: 'Option 3', advertisement: 'Advertisement 3', email: 'email3', homepage: 'homepage3', whatsapp: 'whatsapp3', telegram: 'telegram3', facebook: 'facebook3', instagram: 'instagram3', youtube: 'youtube3', voucher: 'voucher3', positionX: 3, positionY: 3 },
      { id: 4, name: 'Option 4', advertisement: 'Advertisement 4', email: 'email4', homepage: 'homepage4', whatsapp: 'whatsapp4', telegram: 'telegram4', facebook: 'facebook4', instagram: 'instagram4', youtube: 'youtube4', voucher: 'voucher4', positionX: 4, positionY: 4 }
    ]
  }

  ngOnInit(): void {
  }

  onValueChanged(event: any) {
    this.selectedProduct = event.target.value;
    if (this.selectedProduct !== '') {
      this.isQrCreation = false
      this.productChangeEvent.emit(this.product.filter(option => option.id === parseInt(this.selectedProduct)));
    } else this.isQrCreation = true;
  }
}
