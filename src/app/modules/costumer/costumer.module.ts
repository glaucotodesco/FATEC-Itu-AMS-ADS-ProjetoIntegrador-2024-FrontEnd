import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CostumerRoutingModule } from './costumer-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SearchComponent } from './pages/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    AboutUsComponent,
    SearchComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CostumerRoutingModule,
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    CategoriesComponent
  ]
})
export class CostumerModule { }
