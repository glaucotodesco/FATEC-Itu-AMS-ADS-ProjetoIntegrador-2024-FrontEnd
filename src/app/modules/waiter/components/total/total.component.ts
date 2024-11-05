import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {
  @Input()
  showSubTitle: boolean = false

  @Input()
  showModal: boolean = false
}
