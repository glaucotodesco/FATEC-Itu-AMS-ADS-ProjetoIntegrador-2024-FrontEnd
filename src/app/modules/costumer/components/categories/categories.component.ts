import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() selectedCategory: string | null = null;
  selectedProduct: any;
  categories = [
    {
      name: 'Entradas',
      products: [
        {
          name: 'Brusqueta de Carne',
          price: 19.99,
          image: './assets/costumer/search/categories/brusquetaDeCarne.jpg',
          additions: [
            { name: 'Azeitonas', price: 1.50 },
            { name: 'Queijo Ralado', price: 2.00 },
          ]
        },
        {
          name: 'Salada Caesar',
          price: 12.99,
          image: './assets/costumer/search/categories/saladaCaesar.jpg',
          additions: [
            { name: 'Frango Grelhado', price: 4.00 },
            { name: 'Croutons', price: 1.00 },
          ]
        },
        {
          name: 'Coxinha',
          price: 6.99,
          image: './assets/costumer/search/categories/coxinha.jpg',
          additions: [
            { name: 'Molho de Pimenta', price: 0.50 },
            { name: 'Maionese', price: 0.50 },
          ]
        }
      ]
    },
    {
      name: 'Prato Principal',
      products: [
        {
          name: 'Bife com Batata',
          price: 29.99,
          image: './assets/costumer/search/categories/bifeComBatata.jpg',
          additions: [
            { name: 'Queijo', price: 2.00 },
            { name: 'Bacon', price: 3.00 },
          ]
        },
        {
          name: 'Frango à Milanesa',
          price: 39.99,
          image: './assets/costumer/search/categories/frangoAMilanesa.jpg',
          additions: [
            { name: 'Molho de Alho', price: 1.00 },
            { name: 'Arroz', price: 2.50 },
          ]
        },
        {
          name: 'Macarrão ao Sugo',
          price: 24.99,
          image: './assets/costumer/search/categories/macarraoSugo.jpg',
          additions: [
            { name: 'Queijo Parmesão', price: 2.00 },
            { name: 'Manjericão', price: 1.00 },
          ]
        }
      ]
    },
    {
      name: 'Bebidas',
      products: [
        {
          name: 'Refrigerante',
          price: 5.00,
          image: './assets/costumer/search/categories/refrigerante.jpg',
          additions: [
            { name: 'Gelo', price: 0.00 },
            { name: 'Limão', price: 0.50 },
          ]
        },
        {
          name: 'Cerveja',
          price: 8.50,
          image: './assets/costumer/search/categories/cerveja.jpg',
          additions: [
            { name: 'Gelo', price: 0.00 },
            { name: 'Limão', price: 0.50 },
          ]
        },
        {
          name: 'Suco Natural',
          price: 4.50,
          image: './assets/costumer/search/categories/suco.jpg',
          additions: [
            { name: 'Hortelã', price: 0.50 },
            { name: 'Gelo', price: 0.00 },
          ]
        }
      ]
    },
    {
      name: 'Porções',
      products: [
        {
          name: 'Batata Frita C/ Cheddar',
          price: 15.00,
          image: './assets/costumer/search/categories/batataCheddar.jpg',
          additions: [
            { name: 'Molho Ketchup', price: 0.50 },
            { name: 'Maionese', price: 0.50 },
          ]
        },
        {
          name: 'Iscas de Frango',
          price: 18.00,
          image: './assets/costumer/search/categories/iscaDeFrango.jpg',
          additions: [
            { name: 'Molho Barbecue', price: 1.00 },
            { name: 'Molho de Pimenta', price: 0.50 },
          ]
        },
        {
          name: 'Linguiça Acebolada',
          price: 20.00,
          image: './assets/costumer/search/categories/linguica.jpg',
          additions: [
            { name: 'Molho de Alho', price: 1.00 },
            { name: 'Farofa', price: 1.50 },
          ]
        }
      ]
    },
    {
      name: 'Sobremesas',
      products: [
        {
          name: 'Pudim',
          price: 8.99,
          image: './assets/costumer/search/categories/pudim.jpg',
          additions: [
            { name: 'Calda de Chocolate', price: 1.00 },
            { name: 'Granulado', price: 0.50 },
          ]
        },
        {
          name: 'Torta de Limão',
          price: 10.99,
          image: './assets/costumer/search/categories/tortaDeLimao.jpg',
          additions: [
            { name: 'Chantilly', price: 1.00 },
            { name: 'Frutas Vermelhas', price: 1.50 },
          ]
        },
        {
          name: 'Brownie',
          price: 9.99,
          image: './assets/costumer/search/categories/brownie.jpg',
          additions: [
            { name: 'Sorvete', price: 2.00 },
            { name: 'Calda de Caramelo', price: 1.00 },
          ]
        }
      ]
    }
  ];


  getProductsForSelectedCategory() {
    const category = this.categories.find(cat => cat.name === this.selectedCategory);
    return category ? category.products : [];
  }
  openModal(product: any) {
    this.selectedProduct = product;
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.setAttribute('aria-hidden', 'false');
      modalElement.style.display = 'block';
    }
  }
}
