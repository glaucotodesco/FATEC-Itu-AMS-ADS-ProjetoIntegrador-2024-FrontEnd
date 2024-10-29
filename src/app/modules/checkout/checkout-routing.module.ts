import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CloseRegisterComponent } from './pages/close-register/close-register.component';

const routes: Routes = [
  {path: 'home-checkout', component: HomeComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'order-list', component: OrderListComponent},
  {path: 'close-register', component: CloseRegisterComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { 

} 

