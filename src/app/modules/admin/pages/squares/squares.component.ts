import { Component, OnChanges, OnInit } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Square } from '../../../../interfaces/square';
import { SquareService } from '../../../../services/square.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemsService } from '../../../../services/items.service';
import { Item } from '../../../../interfaces/item';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrl: './squares.component.css',
})
export class SquaresComponent implements OnInit {
  openModal(modalForm: ModalComponent, params: any = {}) {
    return modalForm.open(params);
  }

  isEditing: boolean = false;

  formGroupSquare: FormGroup;
  formGroupItem: FormGroup;

  squares: Square[] = [];
  square: Square = {} as Square;
  items: Item[] = [];
  item: Item = {} as Item;
  dorga: Square = {} as Square;
  constructor(
    private squareService: SquareService,
    private itemsService: ItemsService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupSquare = this.formBuilder.group({
      id: [null],
      name: [''],
      items: [[]],
    });

    this.formGroupItem = this.formBuilder.group({
      id: [null],
      name: [''],
      square: [{}],
    });


  }

  loadSquares() {
    this.squareService.getSquares().subscribe({
      next: (data) => (this.squares = data),
    });
  }

  ngOnInit(): void {
    this.loadSquares();
  }

  saveSquare(modal: ModalComponent) {
    modal.open().then((confirm) => { //Opening the modal
      if (confirm) { //If the user clicks "Ok" on modal
        Object.assign(this.square, this.formGroupSquare.value); //Set the new value to aux square
        if (!this.isEditing) {
          this.squareService.save(this.square).subscribe({
            next: () => this.loadSquares() //Bring the new List of squares
          });
        } else {
          this.squareService.update(this.square).subscribe({
            next: () => this.loadSquares()
          });
        }
      }
      this.clearFunction();
    });
  }

  saveItem(square: Square, modal: ModalComponent, item?: Item) {
    

    modal.open().then((confirm) => { 
  
      
      if (confirm) { 
         

        if (!this.isEditing) {
          Object.assign(this.item, this.formGroupItem.value, { square: { id: square.id, name: square.name } });

          
          this.itemsService.postItem(this.item).subscribe({
            next: () => this.loadSquares() 
          })
        } else {
          Object.assign(
            this.item, item, 
            {name: this.formGroupItem.value.name || item?.name},  
            { square: { id: this.formGroupItem.value.square.id || square.id, name: this.formGroupItem.value.square.name || square.name } } )

              
          this.itemsService.putItem(this.item).subscribe({
      
            next: () => this.loadSquares()
          });

        }

        this.item = {} as Item;
        this.formGroupItem.reset();
        this.isEditing = false;


      }
      this.clearFunction();
    });

  }

  clearFunction() {
    //Clear the form
    this.square = {} as Square; //Clear the aux square
    this.formGroupSquare.reset(); //Clear the form
    this.isEditing = false; //Reset the editing coditional, even if the user clicks "cancel" in the modal
  }

  updateSquare(square: Square, modal: ModalComponent) {
    this.square = square; //set the square to edit in the aux square
    this.isEditing = true;
    this.formGroupSquare.setValue(square); //Set the form value
    this.saveSquare(modal); //Go to save method
  }

  updateItem(item: Item, square: Square, modal: ModalComponent) {
    this.square = square;
    this.dorga = square;
    console.log(this.dorga, "dorga");
    
    this.isEditing = true;
    Object.assign(this.item, item);
    this.saveItem(square, modal, item);
  }
}
