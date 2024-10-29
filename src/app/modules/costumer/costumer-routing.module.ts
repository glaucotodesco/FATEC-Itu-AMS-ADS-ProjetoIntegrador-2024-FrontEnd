import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: '', component: HomeComponent},
  {path: 'aboutUs', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostumerRoutingModule { }
