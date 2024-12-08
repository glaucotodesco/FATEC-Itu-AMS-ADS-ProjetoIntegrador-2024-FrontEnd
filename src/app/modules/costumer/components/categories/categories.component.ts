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
          description: 'Uma deliciosa brusqueta de pão crocante, coberta com suculenta carne grelhada, temperada com ervas finas e finalizada com um toque especial de azeite de oliva.',
          price: 19.99,
          image: './assets/costumer/search/categories/brusquetaDeCarne.jpg',
          additions: [
            { name: 'Azeitonas', price: 1.50 },
            { name: 'Queijo Ralado', price: 2.00 },
          ]
        },
        {
          name: 'Salada Caesar',
          description: 'Uma clássica salada Caesar, com folhas frescas de alface crocante, croutons dourados e molho cremoso à base de queijo parmesão.',
          price: 12.99,
          image: './assets/costumer/search/categories/saladaCaesar.jpg',
          additions: [
            { name: 'Frango Grelhado', price: 4.00 },
            { name: 'Croutons', price: 1.00 },
          ]
        },
        {
          name: 'Coxinha',
          description: 'A tradicional coxinha, recheada com frango temperado e envolvida em uma crocante camada dourada, servida quentinha.',
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
          description: 'Um bife suculento grelhado ao ponto perfeito, acompanhado de batatas crocantes e temperadas, para uma refeição clássica e irresistível.',
          price: 29.99,
          image: './assets/costumer/search/categories/bifeComBatata.jpg',
          additions: [
            { name: 'Queijo', price: 2.00 },
            { name: 'Bacon', price: 3.00 },
          ]
        },
        {
          name: 'Frango à Milanesa',
          description: 'Filé de frango empanado e frito até ficar dourado e crocante, servido com um delicioso molho de alho e arroz fresquinho.',
          price: 39.99,
          image: './assets/costumer/search/categories/frangoAMilanesa.jpg',
          additions: [
            { name: 'Molho de Alho', price: 1.00 },
            { name: 'Arroz', price: 2.50 },
          ]
        },
        {
          name: 'Macarrão ao Sugo',
          description: 'Macarrão al dente com um molho sugo caseiro, feito com tomates frescos e ervas aromáticas, servido com queijo parmesão ralado por cima.',
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
          description: 'Refrigerante gelado e refrescante, disponível em diversos sabores para acompanhar sua refeição.',
          price: 5.00,
          image: './assets/costumer/search/categories/refrigerante.jpg',
          additions: [
            { name: 'Gelo', price: 0.00 },
            { name: 'Limão', price: 0.50 },
          ]
        },
        {
          name: 'Cerveja',
          description: 'Cerveja gelada de alta qualidade, perfeita para acompanhar seus pratos preferidos.',
          price: 8.50,
          image: './assets/costumer/search/categories/cerveja.jpg',
          additions: [
            { name: 'Gelo', price: 0.00 },
            { name: 'Limão', price: 0.50 },
          ]
        },
        {
          name: 'Suco Natural',
          description: 'Suco natural e refrescante, feito com frutas frescas, ideal para quem busca um toque saudável durante a refeição.',
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
          description: 'Batatas fritas crocantes, cobertas com um delicioso queijo cheddar derretido, para um toque irresistível de sabor.',
          price: 15.00,
          image: './assets/costumer/search/categories/batataCheddar.jpg',
          additions: [
            { name: 'Molho Ketchup', price: 0.50 },
            { name: 'Maionese', price: 0.50 },
          ]
        },
        {
          name: 'Iscas de Frango',
          description: 'Iscas de frango crocantes e douradas, perfeitas para beliscar enquanto aproveita um bom momento.',
          price: 18.00,
          image: './assets/costumer/search/categories/iscaDeFrango.jpg',
          additions: [
            { name: 'Molho Barbecue', price: 1.00 },
            { name: 'Molho de Pimenta', price: 0.50 },
          ]
        },
        {
          name: 'Linguiça Acebolada',
          description: 'Linguiça suculenta, grelhada e servida com cebolas caramelizadas, uma combinação irresistível.',
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
          description: 'Pudim de leite condensado, cremoso e com a textura perfeita, servido com calda de caramelo suave.',
          price: 8.99,
          image: './assets/costumer/search/categories/pudim.jpg',
          additions: [
            { name: 'Calda de Chocolate', price: 1.00 },
            { name: 'Granulado', price: 0.50 },
          ]
        },
        {
          name: 'Torta de Limão',
          description: 'Torta de limão fresquinha, com uma crosta de biscoito, recheio cremoso de limão e cobertura de chantilly.',
          price: 10.99,
          image: './assets/costumer/search/categories/tortaDeLimao.jpg',
          additions: [
            { name: 'Chantilly', price: 1.00 },
            { name: 'Frutas Vermelhas', price: 1.50 },
          ]
        },
        {
          name: 'Brownie',
          description: 'Brownie de chocolate intenso, com pedaços de nozes e uma camada de calda de caramelo por cima.',
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
