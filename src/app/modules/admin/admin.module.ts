import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CardTopStatsComponent } from './components/card-top-stats/card-top-stats.component';
import { CardMediumStatsComponent } from './components/card-medium-stats/card-medium-stats.component';
import { CardProdDropdownComponent } from './components/card-prod-dropdown/card-prod-dropdown.component';
import { CardGraphComponent } from './components/card-graph/card-graph.component';
import { EmployeeRegisterComponent } from './pages/employee-register/employee-register.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';


@NgModule({
  declarations: [

    HomeComponent,
    CardTopStatsComponent,
    CardMediumStatsComponent,
    CardProdDropdownComponent,
    CardGraphComponent,
    AboutUsComponent,
    ProductsComponent,
    CategoryTableComponent,
    CategoriesComponent,
    EmployeeRegisterComponent,
    ProductsComponent,
    CategoryTableComponent,
    CategoriesComponent,
    HomeComponent,
    AdminNavbarComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule, 
    NgbAccordionModule,
    SharedModule,

    NgbModule,
  ],
  
  exports:[]

})
export class AdminModule { }
