
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { ProductsComponent } from "./pages/products/products.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { LoginComponent } from "./pages/login/login.component";

import { EmployeeRegisterComponent } from "./pages/employee-register/employee-register.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

  { path: "about-us", component: AboutUsComponent },
  {
    path: 'admin',
    component: HomeComponent,
    children: [
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
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

