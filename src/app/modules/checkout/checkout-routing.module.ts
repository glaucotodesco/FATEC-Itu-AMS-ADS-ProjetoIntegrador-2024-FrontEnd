import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { CloseRegisterComponent } from './pages/close-register/close-register.component';

const routes: Routes = [
  {path: 'order-list', component: OrderListComponent},
  {path: 'close-register', component: CloseRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CheckoutRoutingModule { }
