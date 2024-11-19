import { Component } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  openModal(modal: ModalComponent) {
    modal.open();
  }

  exampleItems = [
    [
      {
        name: 'B. Fritas',
      },
      {
        name: 'Bacon',
      },
    ],
    [
      {
        name: 'Bife',
      },
      {
        name: 'C. Frango',
      },
    ],
  ];

  selectItems = this.exampleItems[0];
}
