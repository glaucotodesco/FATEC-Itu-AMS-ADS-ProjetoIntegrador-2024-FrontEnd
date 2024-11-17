import { Component, Input } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-order-addons',
  templateUrl: './order-addons.component.html',
  styleUrl: './order-addons.component.css'
})
export class OrderAddonsComponent {
  @Input()
  showSelectButton: boolean = false

  prods = [
    { id: 1, name: "Cebola", price: 0, status: true },
    { id: 2, name: "Tomate", price: 0, status: true },
    { id: 3, name: "Cheddar", price: 6.59, status: false },
    { id: 4, name: "Hambúrguer Extra", price: 10.99, status: false },
    { id: 5, name: "Molho Extra", price: 4.25, status: false },
  ]

  openModal(modalForm: ModalComponent){
    modalForm.open();
  }
}
