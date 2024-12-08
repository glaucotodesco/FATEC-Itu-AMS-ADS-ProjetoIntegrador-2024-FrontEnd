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
  exampleInfo: { category: string; products: any[] }[] = []

  categories: Categories[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe({
      next: (data) => {
        this.exampleInfo = data
          .filter((category) => category.availability) 
          .map((category) => ({
            category: category.name,
            products: category.products || [],
          }));
      },
      error: (err) => console.error('Erro ao carregar categorias:', err),
    });
  }
  
  openModal(modalForm: ModalComponent, params: any = {}): void {
    modalForm.open(params);
  }
}
