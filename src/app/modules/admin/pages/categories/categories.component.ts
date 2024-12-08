import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { CategoriesService } from '../../../../services/categories.service';
import { Categories } from '../../../../interfaces/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  @ViewChild('modalForm') modalForm: ModalComponent | null = null;
  @ViewChild('modalDelete') modalDelete!: ModalComponent;
  @ViewChild('modalEdit') modalEdit!: ModalComponent;

  categories: Categories[] = []
  newCategory: Categories = { id: 0, name: '', availability: true }
  categoryToDelete: any = null;

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
      this.newCategory = { ...category };
    } else {
      this.newCategory = { id: 0, name: '', availability: true };
    }
    modal.open().then(result => {
      if (result) {
        if (category) {
          this.updateCategory();
        } else {
          this.createCategory();
        }
      }
    }).catch(error => {
      console.error('Modal fechado sem ação:', error);
    });
  }


  isNameInvalid(): boolean {
    return !this.newCategory.name || this.newCategory.name.trim() === '';
  }

  createCategory(): void {
    if (this.isNameInvalid()) {
      console.error("O nome da categoria não pode ser vazio.");
      return;
    }
    this.categoriesService.postCategories(this.newCategory).subscribe({
      next: (createdCategory) => {
        this.categories.push(createdCategory);
        this.newCategory = { id: 0, name: '', availability: true };
      },
      error: (err) => console.error("Erro ao criar categoria:", err)
    });

    console.log('Categoria criada:', this.newCategory);

    if (this.modalForm) {
      this.modalForm.close();
    }

  }

  openDeleteModal(category: any): void {
    this.categoryToDelete = category;
    this.modalDelete.open();
  }

  deleteCategory() {
    if (this.categoryToDelete) {
      this.categoriesService.deleteCategories(this.categoryToDelete.id).subscribe({
        next: () => {
          console.log('Categoria deletada com sucesso');
          this.modalDelete.close();
          window.location.reload();
        },
        error: (err) => {
          console.error('Erro ao deletar categoria', err);
        }
      });
    }
  }
  openEditModal(category: Categories): void {
    this.newCategory = { ...category }; 
    this.modalEdit.open();
  }

  updateCategory(): void {
    if (this.isNameInvalid()) {
      console.error("O nome da categoria não pode ser vazio.");
      return;
    }

    this.categoriesService.putCategories(this.newCategory).subscribe({
      next: (putCategories) => {
        const index = this.categories.findIndex(c => c.id === putCategories.id);
        if (index !== -1) {
          // Atualiza a categoria na lista
          this.categories[index] = putCategories;
        }
        this.newCategory = { id: 0, name: '', availability: true };  // Limpa os dados
        this.modalEdit.close();  // Fecha o modal
      },
      error: (err) => {
        console.error("Erro ao atualizar categoria:", err);
      }
    });

    console.log('Categoria atualizada:', this.newCategory);
  }


}
