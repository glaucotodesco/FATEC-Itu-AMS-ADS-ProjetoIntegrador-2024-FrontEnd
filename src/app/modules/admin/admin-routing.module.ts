
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { ProductsComponent } from "./pages/products/products.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
   {path: "dashboard", component: HomeComponent},
   {path: "about-us", component: AboutUsComponent},
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

