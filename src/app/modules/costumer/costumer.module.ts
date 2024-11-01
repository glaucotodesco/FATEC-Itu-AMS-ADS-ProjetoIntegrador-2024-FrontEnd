import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CostumerRoutingModule } from './costumer-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SearchComponent } from './pages/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ModalProductsComponent } from './components/modal-products/modal-products.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    MainComponent,
    SideMenuComponent,
    AboutUsComponent,
    SearchComponent,
    CategoriesComponent,
    ModalProductsComponent
  ],
  imports: [
    CommonModule,
    CostumerRoutingModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    CategoriesComponent
  ]
})
export class CostumerModule { }
