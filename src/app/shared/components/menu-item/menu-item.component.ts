import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  prods = [
    {name: 'coca cola', price: 9.99, image: 'assets/menu/coke.jpg'},
    {name: 'hambúrguer', price: 49.99, image: 'assets/menu/hamburguer.jpg'},
    {name: 'milk shake', price: 24.99, image: 'assets/menu/milk-shake.jpg'},
    {name: 'macarrão ao sugo', price: 44.99, image: 'assets/menu/pasta.jpg'},
  ]
}
