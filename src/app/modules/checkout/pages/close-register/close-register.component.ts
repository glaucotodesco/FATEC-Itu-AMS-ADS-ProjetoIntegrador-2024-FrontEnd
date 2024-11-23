import { Component } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
@Component({
  selector: 'app-close-register',
  templateUrl: './close-register.component.html',
  styleUrl: './close-register.component.css'
})
export class CloseRegisterComponent {
  
  openModal(modal : ModalComponent) {
    modal.open();
  }
}
