import { Component } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrl: './squares.component.css'
})
export class SquaresComponent {
  openModal(modalForm: ModalComponent, params : any = {}){
    modalForm.open(params);
  }
}
