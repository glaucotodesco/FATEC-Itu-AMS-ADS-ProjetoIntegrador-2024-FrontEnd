import { Component, Input } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {
  @Input()
  showSubTitle: boolean = false

  @Input()
  showModal: boolean = false

  @Input()
  total!: number

  @Input()
  subTotal!: number

  openModal(modalForm: ModalComponent) {
    modalForm.open();
  }
}
