import { Categories } from './../../../../interfaces/categories';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { CategoriesService } from '../../../../services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  exampleInfo = [
    {
      category: 'Bebidas',
      products: [
        { name: 'Coca-cola', price: 5, active: true },
        { name: 'Água', price: 2, active: true },
        { name: 'Itubaína', price: 4, active: false },
      ],
    },
    {
      category: 'Pratos',
      products: [
        { name: 'Parmegiana', price: 22, active: true },
        { name: 'Macarronada', price: 15, active: false },
        { name: 'Salada', price: 9, active: true },
      ],
    },
    {
      category: 'Sobremesas',
      products: [{ name: "Bolo", price: 14, active: true }],
    },
  ];

  categories: Categories[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.updateCategoryNames();
      },
      error: (err) => console.error("Erro ao carregar categorias:", err),
    });
  }

  updateCategoryNames(): void {
    this.exampleInfo.forEach((categoryInfo, index) => {
      if (this.categories[index]) {
        categoryInfo.category = this.categories[index].name;
      }
    });
  }

  openModal(modalForm: ModalComponent, params: any = {}): void {
    modalForm.open(params);
  }
}
