import { Component } from '@angular/core';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrl: './order-register.component.css'
})
export class OrderRegisterComponent {
  pratosPrincipais = [
    { nome: 'Hambúrguer', preco: 25.00 },
    { nome: 'Pizza', preco: 30.00 }
  ];

  sobremesas = [
    { nome: 'Pudim', preco: 10.00 },
    { nome: 'Torta de Limão', preco: 12.00 }
  ];

  bebidas = [
    { nome: 'Refrigerante', preco: 5.00 },
    { nome: 'Suco Natural', preco: 7.00 }
  ];

  // Variáveis para o controle da comanda e tipo de pedido
  comanda: string = '';
  tipoPedido: string = 'balcao'; // 'balcao' ou 'mesa'

  // Para controlar a categoria selecionada e pesquisa
  categoriaSelecionada: string = '';
  pesquisa: string = '';

  // Lista de produtos adicionados
  produtosAdicionados: { nome: string, preco: number, quantidade: number }[] = [];

  // Método para filtrar produtos pela pesquisa
  filtrarProdutos(produtos: any[]) {
    return produtos.filter(produto =>
      produto.nome.toLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }

  // Método para adicionar um produto ao pedido
  adicionarProduto(produto: any) {
    const produtoExistente = this.produtosAdicionados.find(p => p.nome === produto.nome);
    if (produtoExistente) {
      // Se já existe, incrementa a quantidade
      produtoExistente.quantidade++;
    } else {
      // Caso não exista, adiciona o produto com quantidade 1
      this.produtosAdicionados.push({ nome: produto.nome, preco: produto.preco, quantidade: 1 });
    }
  }

  // Método para remover um produto da lista de produtos adicionados
  removerProduto(produto: any) {
    this.produtosAdicionados = this.produtosAdicionados.filter(p => p !== produto);
  }

  // Método para calcular o total da comanda
  calcularTotalComanda(): number {
    return this.produtosAdicionados.reduce((total, produto) => {
      return total + (produto.preco * produto.quantidade);
    }, 0);
  }

  // Método para atualizar a categoria selecionada
  onCategoriaChange(event: any) {
    this.categoriaSelecionada = event.target.value;
  }
}