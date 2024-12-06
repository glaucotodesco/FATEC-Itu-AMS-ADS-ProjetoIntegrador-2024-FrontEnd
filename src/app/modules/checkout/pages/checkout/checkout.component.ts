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
    { name: 'Parmegiana', quantity: 1, previousQuantity: null, unitPrice: 5, additional: 1, removalReason: '', removed: false, editingQuantity: false, newQuantity: 1 },
    { name: 'Coca-cola', quantity: 2, previousQuantity: null, unitPrice: 1, additional: 2, removalReason: '', removed: false, editingQuantity: false, newQuantity: 2 }
  ];

  orderItems2 = [
    { name: 'Espaguete', quantity: 1, previousQuantity: null, unitPrice: 7, additional: 1.5, removalReason: '', removed: false, editingQuantity: false, newQuantity: 1 },
    { name: 'Guaraná', quantity: 1, previousQuantity: null, unitPrice: 2, additional: 0.5, removalReason: '', removed: false, editingQuantity: false, newQuantity: 1 }
  ];

  newComandaNumber: number = 0;
  scannedCode: string = '';
  selectedPaymentMethod: string = 'credit';
  totalAmount: number = 0;

  // Dados de divisão do pagamento
  splitPayments: { method: string, amount: number }[] = [];

  // Atualiza o total quando a quantidade de um item muda
  updateTotal(): void {
    this.totalAmount = this.calculateTotalAmount();
    console.log('Total atualizado:', this.totalAmount);
  }

  // Cálculo do total de itens em uma comanda
  calculateTotal(items: any[]): number {
    return items.reduce((total, item) => {
      if (!item.removed) {
        return total + (item.unitPrice + item.additional) * item.quantity;
      }
      return total;
    }, 0);
  }

  // Cálculo do valor total somando todas as comandas e a gorjeta
  calculateTotalAmount(): number {
    const total = this.calculateTotal(this.orderItems1) + this.calculateTotal(this.orderItems2);
    return total + this.calculateTip(total);
  }

  // Cálculo da gorjeta (15%)
  calculateTip(amount: number): number {
    return amount * 0.15;
  }

  // Marcar um item como removido
  markAsRemoved(item: any): void {
    if (!item.removalReason) {
      alert('Por favor, informe a razão da remoção.');
      return;
    }
    item.removed = true;
    item.quantity = 0;
    this.updateTotal();
  }

  // Salva a nova quantidade de um item
  saveNewQuantity(item: any): void {
    if (item.newQuantity <= 0) {
      alert('A quantidade deve ser maior que zero.');
      return;
    }
    item.previousQuantity = item.quantity;  // Atualiza o histórico com a quantidade antes de salvar
    item.quantity = item.newQuantity;
    item.editingQuantity = false;
    this.updateTotal();
    console.log(`Quantidade atualizada para o item "${item.name}": ${item.quantity}`);
  }

  // Ativa o modo de edição da quantidade
  toggleEditQuantity(item: any): void {
    if (item.editingQuantity) {
      item.previousQuantity = item.quantity; // Salva a quantidade anterior
    }
    item.editingQuantity = true;
    item.newQuantity = item.quantity; // Define a nova quantidade como a original
  }

  // Cancela a edição da quantidade
  cancelEditQuantity(item: any): void {
    item.editingQuantity = false;
    item.newQuantity = item.quantity; // Restaura a quantidade original
  }

  // Finaliza o pagamento (ação fictícia)
  finalizePayment(): void {
    if (this.selectedPaymentMethod === 'split' && this.splitPayments.reduce((sum, payment) => sum + payment.amount, 0) !== this.calculateTotalAmount()) {
      alert('O valor total não corresponde à soma dos pagamentos divididos!');
      return;
    }
    alert(`Pagamento finalizado com sucesso!`);
  }

  // Adiciona uma nova comanda (simples exemplo)
  addComanda(number: number): void {
    if (number) {
      alert(`Comanda ${number} adicionada!`);
    }
  }

  // Escaneia um produto (exemplo fictício)
  scanProduct(code: string): void {
    alert(`Produto escaneado: ${code}`);
  }

  // Lida com a mudança na forma de pagamento
  onPaymentMethodChange(): void {
    if (this.selectedPaymentMethod !== 'split') {
      this.splitPayments = [];  // Limpa os pagamentos divididos se mudar a opção
    }
  }

  // Atualiza o total ao dividir o pagamento
  updateSplitAmount(): void {
    const total = this.splitPayments.reduce((sum, payment) => sum + payment.amount, 0);
    if (total > this.calculateTotalAmount()) {
      alert('A soma dos pagamentos não pode ser maior que o total!');
    }
  }

  // Adiciona um novo método de pagamento na divisão
  addSplitPayment(): void {
    if (this.splitPayments.length >= 3) {
      alert('Você pode dividir o pagamento em no máximo 3 formas.');
      return;
    }
    this.splitPayments.push({ method: 'credit', amount: 0 });
  }

  // Remove um pagamento da divisão
  removeSplit(index: number): void {
    this.splitPayments.splice(index, 1);
    this.updateSplitAmount();
  }
}
