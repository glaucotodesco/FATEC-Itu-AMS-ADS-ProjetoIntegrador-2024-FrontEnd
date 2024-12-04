import { Component } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  // Dados das comandas
  orderItems1 = [
    { name: 'Parmegiana', quantity: 1, unitPrice: 5, additional: 1, removalReason: '' },
    { name: 'Coca-cola', quantity: 2, unitPrice: 1, additional: 2, removalReason: '' }
  ];

  orderItems2 = [
    { name: 'Espaguete', quantity: 1, unitPrice: 7, additional: 1.5, removalReason: '' },
    { name: 'Guaraná', quantity: 1, unitPrice: 2, additional: 0.5, removalReason: '' }
  ];

  newComandaNumber: number = 0; // Inicializando com 0 ou outro valor padrão
  scannedCode: string = ''; // Inicializando como string vazia
  selectedPaymentMethod: string = 'credit';
  totalAmount: number = 0; // Inicializando a propriedade totalAmount

  openModal(modal: ModalComponent) {
    modal.open();
  }

  // Atualiza o total quando a quantidade de um item muda
  updateTotal(): void {
    this.totalAmount = this.calculateTotalAmount(); // Atualiza totalAmount
    console.log('Total atualizado:', this.totalAmount);
  }

  // Cálculo do total de itens em uma comanda
  calculateTotal(items: any[]): number {
    return items.reduce((total, item) => total + (item.unitPrice + item.additional) * item.quantity, 0);
  }

  // Cálculo do valor total somando todas as comandas e a gorjeta
  calculateTotalAmount(): number {
    const total = this.calculateTotal(this.orderItems1) + this.calculateTotal(this.orderItems2);
    return total + this.calculateTip(total);
  }

  // Cálculo da gorjeta (15%)
  calculateTip(amount: number): number {
    return amount * 0.15; // 15% tip
  }

  // Remover item da comanda
  removeItem(orderItems: any[], index: number): void {
    orderItems.splice(index, 1);
    this.updateTotal(); // Atualiza o total após remover um item
  }

  // Adicionar nova comanda
  addComanda(comandaNumber: number): void {
    // Implementar lógica para adicionar uma nova comanda
    console.log(`Adicionando nova comanda: ${comandaNumber}`);
  }

  // Escanear produto pelo código de barras
  scanProduct(code: string): void {
    // Implementar lógica para lidar com o produto escaneado
    console.log(`Produto escaneado: ${code}`);
  }

  // Finalizar pagamento
  finalizePayment(): void {
    const totalAmount = this.calculateTotalAmount();
    // Implementar lógica para finalizar o pagamento
    console.log(`Finalizando pagamento. Total a pagar: R$ ${totalAmount.toFixed(2)}`);
  }
}