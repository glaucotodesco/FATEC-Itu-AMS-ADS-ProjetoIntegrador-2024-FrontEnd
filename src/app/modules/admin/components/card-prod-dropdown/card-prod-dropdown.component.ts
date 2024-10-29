import { Component } from '@angular/core';

@Component({
  selector: 'app-card-prod-dropdown',
  templateUrl: './card-prod-dropdown.component.html',
  styleUrl: './card-prod-dropdown.component.css'
})
export class CardProdDropdownComponent {
  items = [
    {
      id: 1, class: 'Bebidas', percentange: 60,
      products: [
        { id: 1, name: 'Coca-cola 500ml', price: 5, percentage: 50.5 },
        { id: 2, name: 'Pepsi 500ml', price: 4.20, percentage: 9 },
        { id: 3, name: 'Sprite 500ml', price: 5.20, percentage: 10.5 },
        { id: 4, name: 'Fanta 350ml', price: 3, percentage: 12.3},
        { id: 5, name: 'Guaraná 500ml', price: 4, percentage: 17.7 },
      ]
    },
    {
      id: 2, class: 'Pratos', percentange: 30,
      products: [
        { id: 1, name: 'Macarronada', price: 10, percentage: 19.5 },
        { id: 2, name: 'Pizza', price: 50, percentage: 10.5 },
        { id: 3, name: 'Hamburger', price: 10, percentage: 9.5 },
        { id: 4, name: 'Arroz com feijão', price: 10, percentage: 29.5 },
        { id: 5, name: 'Esfiha', price: 10, percentage: 20.9 },

        { id: 6, name: 'Lasanha', price: 20, percentage: 10.1}




      ]
    },
    {
      id: 3, class: 'Sobremesas', percentange: 10, products: [
        { id: 1, name: 'Brownie', price: 3, percentage: 7.5 },
        { id: 2, name: 'Bolo de cereja (1 fatia)', price: 7 , percentage: 12.5 },
        { id: 3, name: 'Torta de chocolate (1 fatia)', price: 10, percentage: 12.3 },
        { id: 4, name: 'Cookie', price: 3, percentage: 12.5 },
        { id: 5, name: 'Pavlova', price: 10, percentage: 19.2  },
        { id: 6, name: 'Mousse de chocolate', price: 9, percentage: 35 },

      ]
    }

  ]

}
