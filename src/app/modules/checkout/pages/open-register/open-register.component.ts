import { Component } from '@angular/core';

@Component({
  selector: 'app-open-register',
  templateUrl: './open-register.component.html',
  styleUrls: ['./open-register.component.css']
})
export class OpenRegisterComponent {
  save() {
    const initialValue = (document.getElementById('initialValue') as HTMLInputElement).value;
    alert('Value saved: R$ ' + initialValue);

    const totalValue = initialValue ? 'R$ ' + parseFloat(initialValue).toFixed(2) : 'R$ 0.00';
    document.getElementById('totalValue')!.textContent = totalValue;
  }
}
