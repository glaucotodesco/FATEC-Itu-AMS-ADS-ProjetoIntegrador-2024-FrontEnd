import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent implements OnInit {
  prods: Product[] = []

  constructor (private service: ProductService) {}

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts () {
    this.service.getProducts().subscribe(data => this.prods = data)
  }
}
