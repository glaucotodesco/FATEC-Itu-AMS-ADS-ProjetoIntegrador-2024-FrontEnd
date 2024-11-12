
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from "./pages/products/products.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { HomeComponent } from "./pages/home/home.component";
import { EmployeeRegisterComponent } from "./pages/employee-register/employee-register.component";
import { RestaurantConfigComponent } from "./pages/restaurant-config/restaurant-config.component";
import { EmployeesComponent } from './pages/employees/employees.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'employee',
        component: EmployeeRegisterComponent
      },
      {
        path: 'tables',
        component: RestaurantConfigComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: "about-us",
        component: AboutUsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

