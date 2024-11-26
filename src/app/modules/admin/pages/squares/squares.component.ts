import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Square } from '../../../../interfaces/square';
import { SquareService } from '../../../../services/square.service';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrl: './squares.component.css'
})
export class SquaresComponent implements OnInit {
  openModal(modalForm: ModalComponent, params : any = {}){
    modalForm.open(params);
  }

  squares: Square[] = [];

  constructor(private squareService: SquareService) {}

  loadSquares(){
    this.squareService.getSquares().subscribe({
      next: data => this.squares = data
    })
  }

  ngOnInit(): void{
    this.loadSquares();
  }
}
