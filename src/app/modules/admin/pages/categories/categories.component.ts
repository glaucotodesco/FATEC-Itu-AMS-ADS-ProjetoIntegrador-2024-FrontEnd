import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { CategoriesService } from '../../../../services/categories.service';
import { Categories } from '../../../../interfaces/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories: Categories[] = []
  newCategory: Categories = { id: 0, name: '', availability: true }
  categoryToDelete: Categories | null = null;  // Armazena o objeto da categoria a ser deletada

  // categories: Categories[] = [
  //   { id: 1, name: 'Bebidas', availability: true },
  //   { id: 2, name: 'Pratos', availability: false },
  //   { id: 3, name: 'Sobremesas', availability: true }
  // ];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error("Erro ao carregar categorias:", err)
    });
  }

  openModal(modal: ModalComponent, category: Categories | null = null): void {
    if (category) {
      this.newCategory = { ...category };  // Atribui os dados da categoria à nova categoria
    } else {
      this.newCategory = { id: 0, name: '', availability: true };  // Cria uma nova categoria
    }
    modal.open().then(result => {
      if (result) {
        this.createCategory(); // Se o resultado for 'ok', cria a categoria
      }
    }).catch(error => {
      console.error('Modal fechado sem ação:', error);
    });
  }

  createCategory(): void {
    this.categoriesService.postCategories(this.newCategory).subscribe({
      next: (createdCategory) => {
        this.categories.push(createdCategory); // Adiciona a nova categoria à lista local
        this.newCategory = { id: 0, name: '', availability: true }; // Limpa os campos após criação
      },
      error: (err) => console.error("Erro ao criar categoria:", err)
    });
  }
  
  openDeleteModal(modalDelete: ModalComponent, category: Categories): void {
    this.categoryToDelete = category;
    modalDelete.open();
  }

  deleteCategory(): void {
    if (this.categoryToDelete) {
      this.categoriesService.deleteCategories(this.categoryToDelete.id).subscribe({
        next: () => {
          this.categories = this.categories.filter(category => category.id !== this.categoryToDelete?.id);
          this.categoryToDelete = null;  // Limpa a categoria após exclusão
        },
        error: (err) => console.error("Erro ao deletar categoria:", err)
      });
    }
  }
  
}
