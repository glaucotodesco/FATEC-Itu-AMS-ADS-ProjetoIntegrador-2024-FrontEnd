import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./pages/products/products.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { EmployeeRegisterComponent } from "./pages/employee-register/employee-register.component";

const routes: Routes = [
  {
    path: '',
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
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
