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

  exampleInfo = [
    {
      square: 'Fritura',
      items: [
        {
          name: 'B. Fritas'
        },
        {
          name: 'Bacon'
        }
      ],
    },
    {
      square: 'Assados',
      items: [
        {
          name: 'Bife'
        },
        {
          name: 'C. Frango'
        }
      ],
    }
  ]
}
