import { Component } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
  // Arrays para produtos por categoria. -- Lembrando que são apenas valores falsos, para mostrar a função.
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

  // Para controlar a categoria selecionada
  categoriaSelecionada: string = '';
  // Para armazenar a pesquisa
  pesquisa: string = '';
  
  // Lista de produtos adicionados ao pedido
  produtosAdicionados: { nome: string, preco: number, quantidade: number }[] = [];

  // Método para filtrar os produtos conforme a pesquisa
  filtrarProdutos(produtos: any[]) {
    return produtos.filter(produto => 
      produto.nome.toLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }

  // Método para adicionar um produto ao pedido
  adicionarProduto(produto: any) {
    const produtoExistente = this.produtosAdicionados.find(p => p.nome === produto.nome);
    if (produtoExistente) {
      // Se o produto já existe, apenas incrementa a quantidade
      produtoExistente.quantidade++;
    } else {
      // Caso o produto ainda não tenha sido adicionado, cria um novo item
      this.produtosAdicionados.push({ nome: produto.nome, preco: produto.preco, quantidade: 1 });
    }
  }

  // Método para remover um produto do pedido
  removerProduto(produto: any) {
    // Remove o produto da lista de produtos adicionados
    this.produtosAdicionados = this.produtosAdicionados.filter(p => p !== produto);
  }
}
