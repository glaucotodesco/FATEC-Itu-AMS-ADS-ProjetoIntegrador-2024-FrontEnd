
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderTicketsComponent } from './pages/order-tickets/order-tickets.component';
import { LoginWaiterComponent } from './pages/login-waiter/login-waiter.component';

const routes: Routes = [
  { path: 'login', component: LoginWaiterComponent },
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderDetailsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'ticket', component: OrderTicketsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
