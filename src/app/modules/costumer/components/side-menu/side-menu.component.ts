import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  activeItem: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['activeItem'] !== undefined) {
        this.activeItem = +params['activeItem']; // Converte para número
      }
    });
  }

  setActiveItem(index: number) {
    this.activeItem = index;
  }
}
