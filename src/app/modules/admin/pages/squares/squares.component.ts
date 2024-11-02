import { Component } from '@angular/core';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrl: './squares.component.css'
})
export class SquaresComponent {
  examplewaiter = [
    {
      name: "Romulo",
      status: 1,
      block: false,
    },
    {
      name: "Iara",
      status: 2,
      block: false,
    },
    {
      name: "Diogenes",
      status: 3,
      block: true,
    },
  ]

  exampleCheckout = [
    {
      name: "Leandra",
      status: 1,
      block: false,
    },
    {
      name: "Julio",
      status: 2,
      block: false,
    },
  ]

}
