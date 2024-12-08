import { Component } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

interface Order {
  id: number;
  total: string;
  time: string;
  type: string; // "Mesa" or "Balcão"
  status: string; // "Aguardando Pagamento" or "Fechado"
  tableNumber?: number; // Número da mesa, opcional
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Dados das comandas em aberto
  ordersOpen: Order[] = [
    { id: 123, total: 'R$ 25,00', time: '19:00', type: 'Mesa', status: 'Aguardando Pagamento', tableNumber: 1 },
    { id: 124, total: 'R$ 30,00', time: '19:15', type: 'Balcão', status: 'Aguardando Pagamento' },
    { id: 125, total: 'R$ 40,00', time: '19:30', type: 'Mesa', status: 'Aguardando Pagamento', tableNumber: 2 },
    { id: 126, total: 'R$ 35,00', time: '19:45', type: 'Balcão', status: 'Aguardando Pagamento' },
    { id: 127, total: 'R$ 20,00', time: '19:50', type: 'Mesa', status: 'Aguardando Pagamento', tableNumber: 1 },
  ];

  // Dados das comandas fechadas
  ordersClosed: Order[] = [
    { id: 128, total: 'R$ 50,00', time: '18:30', type: 'Mesa', status: 'Fechado', tableNumber: 3 },
    { id: 129, total: 'R$ 20,00', time: '17:45', type: 'Balcão', status: 'Fechado' },
  ];

  // Listas filtradas
  filteredOpenOrders: Order[] = [...this.ordersOpen];
  filteredClosedOrders: Order[] = [...this.ordersClosed];

  // Propriedades para pesquisa e filtro
  searchQueryOpen: string = '';
  selectedTypeOpen: string = 'Todos';

  searchQueryClosed: string = '';
  selectedTypeClosed: string = 'Todos';

  // Propriedades de paginação
  currentPageOpen: number = 1;
  itemsPerPageOpen: number = 4; // Número de itens por página
  totalPagesOpen: number = 0;

  currentPageClosed: number = 1;
  itemsPerPageClosed: number = 4; // Número de itens por página
  totalPagesClosed: number = 0;

  constructor() {
    this.filterOpenOrders();
    this.filterClosedOrders();
  }

  openModal(modal: ModalComponent) {
    modal.open();
  }

  // Filtragem das comandas em aberto
  filterOpenOrders() {
    this.filteredOpenOrders = this.ordersOpen.filter(order => {
      const matchesSearch = order.id.toString().includes(this.searchQueryOpen) || 
                            (order.type === 'Mesa' && order.tableNumber?.toString().includes(this.searchQueryOpen));
      const matchesType = this.selectedTypeOpen === 'Todos' || order.type === this.selectedTypeOpen;
      return matchesSearch && matchesType;
    });

    this.totalPagesOpen = Math.ceil(this.filteredOpenOrders.length / this.itemsPerPageOpen);
    this.currentPageOpen = 1; // Resetar para a primeira página ao filtrar
  }

  // Filtragem das comandas fechadas
  filterClosedOrders() {
    this.filteredClosedOrders = this.ordersClosed.filter(order => {
      const matchesSearch = order.id.toString().includes(this.searchQueryClosed) || 
                            (order.type === 'Mesa' && order.tableNumber?.toString().includes(this.searchQueryClosed));
      const matchesType = this.selectedTypeClosed === 'Todos' || order.type === this.selectedTypeClosed;
      return matchesSearch && matchesType;
    });

    this.totalPagesClosed = Math.ceil(this.filteredClosedOrders.length / this.itemsPerPageClosed);
    this.currentPageClosed = 1; // Resetar para a primeira página ao filtrar
  }

  // Navegar para a próxima página
  nextPageOpen() {
    if (this.currentPageOpen < this.totalPagesOpen) {
      this.currentPageOpen++;
    }
  }

  prevPageOpen() {
    if (this.currentPageOpen > 1) {
      this.currentPageOpen--;
    }
  }

  // Navegar para a próxima página
  nextPageClosed() {
    if (this.currentPageClosed < this.totalPagesClosed) {
      this.currentPageClosed++;
    }
  }

  prevPageClosed() {
    if (this.currentPageClosed > 1) {
      this.currentPageClosed--;
    }
  }

  // Obter os pedidos da página atual
  getCurrentOpenOrders(): Order[] {
    const startIndex = (this.currentPageOpen - 1) * this.itemsPerPageOpen;
    return this.filteredOpenOrders.slice(startIndex, startIndex + this.itemsPerPageOpen);
  }

  getCurrentClosedOrders(): Order[] {
    const startIndex = (this.currentPageClosed - 1) * this.itemsPerPageClosed;
    return this.filteredClosedOrders.slice(startIndex, startIndex + this.itemsPerPageClosed);
  }
}