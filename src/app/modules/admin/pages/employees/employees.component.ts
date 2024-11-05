import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  exampleWaiter = [
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

  exampleManager = [
    {
      name: "Pietro",
      status: 2,
      block: false,
    },
    {
      name: "Carla",
      status: 1,
      block: false,
    },
  ]
}
