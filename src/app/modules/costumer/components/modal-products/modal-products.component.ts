import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-products',
  templateUrl: './modal-products.component.html',
  styleUrl: './modal-products.component.css'
})
export class ModalProductsComponent {
  @Input() product: any;

  closeModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.setAttribute('aria-hidden', 'true');
      modalElement.style.display = 'none';
    }
  }
}
