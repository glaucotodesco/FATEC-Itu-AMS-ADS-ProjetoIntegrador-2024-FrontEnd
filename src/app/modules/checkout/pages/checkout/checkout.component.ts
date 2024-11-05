import { Component } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  openModal(modal : ModalComponent) {
    modal.open();
  }
}
