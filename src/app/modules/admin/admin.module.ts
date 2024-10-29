import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CategoryTableComponent,
    CategoriesComponent,
    HomeComponent,
    AdminNavbarComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    NgbModule,
    AdminRoutingModule
  ],
  exports:[]
})
export class AdminModule { }
