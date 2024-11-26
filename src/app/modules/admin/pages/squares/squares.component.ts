import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Square } from '../../../../interfaces/square';
import { SquareService } from '../../../../services/square.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrl: './squares.component.css'
})
export class SquaresComponent implements OnInit {
  openModal(modalForm: ModalComponent, params : any = {}){
    return modalForm.open(params);
  }

  formGroupSquare: FormGroup;

  squares: Square[] = [];
  square: Square = {} as Square;

  constructor(private squareService: SquareService,
              private formBuilder: FormBuilder
  ) {
    this.formGroupSquare = this.formBuilder.group({
      id : {value:null, disable:true},
      name : [''],
      items: {value:null, disable:true}
    });
  }

  loadSquares(){
    this.squareService.getSquares().subscribe({
      next: data => this.squares = data
    })
  }

  ngOnInit(): void{
    this.loadSquares();
  }

  saveSquare(modal: ModalComponent){
    modal.open().then(
      (confirm) => {
        if(confirm){
          Object.assign(this.square, this.formGroupSquare.value);
          this.squareService.save(this.square).subscribe({
            next: () => {
              this.loadSquares()
              this.formGroupSquare.reset()
            }
          })
        }
      }
    )
  }
}
