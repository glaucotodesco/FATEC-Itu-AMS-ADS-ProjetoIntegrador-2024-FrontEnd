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
import { ProductComponent } from './pages/product/product.component';
import { RestaurantConfigComponent } from './pages/restaurant-config/restaurant-config.component';
import { OrderConfigComponent } from './components/order-config/order-config.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SquaresComponent } from './pages/squares/squares.component';
import { SquareTableComponent } from './components/square-table/square-table.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { AboutUsUpperComponent } from './components/about-us-upper/about-us-upper.component';
import { AboutUsBottomComponent } from './components/about-us-bottom/about-us-bottom.component';
import { AboutUsMiddleComponent } from './components/about-us-middle/about-us-middle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    AdminNavbarComponent,
    ProductComponent,
    RestaurantConfigComponent,
    OrderConfigComponent,
    EmployeeTableComponent,
    EmployeesComponent,
    DashboardComponent,
    SquaresComponent,
    SquareTableComponent,
    LoginAdminComponent,
    AboutUsUpperComponent,
    AboutUsMiddleComponent,
    AboutUsBottomComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    NgbAccordionModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],

  exports:[]

})
export class AdminModule { }
