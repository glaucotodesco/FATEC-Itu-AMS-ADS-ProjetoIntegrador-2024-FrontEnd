import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-config',
  templateUrl: './restaurant-config.component.html',
  styleUrl: './restaurant-config.component.css'
})
export class RestaurantConfigComponent {
  testArray = new Array(6).fill(null).map((_, i) => i + 1)
}
