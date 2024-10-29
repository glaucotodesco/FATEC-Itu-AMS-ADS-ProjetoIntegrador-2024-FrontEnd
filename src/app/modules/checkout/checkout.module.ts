import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenRegisterComponent } from './pages/open-register/open-register.component';
import { OrdersSlipComponent } from './components/orders-slip/orders-slip.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CloseRegisterComponent } from './pages/close-register/close-register.component';
import { CheckoutRoutingModule } from './checkout-routing.module';



@NgModule({
  declarations: [
    OpenRegisterComponent,
    OrderListComponent
    HomeComponent,
    OrdersSlipComponent,
    CloseRegisterComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
