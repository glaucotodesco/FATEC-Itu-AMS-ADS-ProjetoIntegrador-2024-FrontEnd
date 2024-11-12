import { Component } from '@angular/core';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.css']
})
export class OrderRegisterComponent {
  // Controle da página ativa
  paginaAtiva: number = 1;  // Página 1: Adicionar Pedido, Página 2: Pedidos Existentes

  // Propriedades do pedido
  tipoPedido: string = 'mesa';  // Valor inicial (mesa ou balcão)
  numeroComanda: string = '';
  categoriaSelecionada: string = '';
  pesquisa: string = '';
  produtosAdicionados: { nome: string, preco: number, quantidade: number }[] = [];
  pedidosExistentes: any[] = [];  // Lista de pedidos já existentes

  // Dados dos produtos
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

  // Método para filtrar produtos conforme a pesquisa
  filtrarProdutos(produtos: any[]) {
    return produtos.filter(produto =>
      produto.nome.toLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }

  // Método para adicionar um produto ao pedido
  adicionarProduto(produto: any) {
    const produtoExistente = this.produtosAdicionados.find(p => p.nome === produto.nome);
    if (produtoExistente) {
      produtoExistente.quantidade++;
    } else {
      this.produtosAdicionados.push({ nome: produto.nome, preco: produto.preco, quantidade: 1 });
    }
  }

  // Método para remover um produto do pedido
  removerProduto(produto: any) {
    this.produtosAdicionados = this.produtosAdicionados.filter(p => p !== produto);
  }

  // Método para salvar o pedido
  salvarPedido() {
    const novoPedido = {
      numeroComanda: this.numeroComanda,
      tipoPedido: this.tipoPedido,
      produtos: this.produtosAdicionados,
    };
    this.pedidosExistentes.push(novoPedido);  // Adiciona o novo pedido à lista de pedidos existentes
    this.produtosAdicionados = [];  // Limpa a lista de produtos adicionados
    this.numeroComanda = '';  // Limpa o campo do número da comanda
    this.tipoPedido = 'mesa';  // Reseta o tipo de pedido
    alert('Pedido adicionado com sucesso!');
    this.paginaAtiva = 2;  // Muda para a página de pedidos existentes após salvar
  }

  // Método para alternar entre as páginas de navegação
  mudarPagina(pagina: number) {
    this.paginaAtiva = pagina;
  }
}
