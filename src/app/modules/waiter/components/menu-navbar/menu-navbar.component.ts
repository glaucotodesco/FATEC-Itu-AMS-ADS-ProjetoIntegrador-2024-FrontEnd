import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrl: './menu-navbar.component.css'
})
export class MenuNavbarComponent {
  @Input()
  goBackScreenButton ?: string
}
