import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenRegisterComponent } from './pages/open-register/open-register.component';
import { OrdersSlipComponent } from './components/orders-slip/orders-slip.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OrderRegisterComponent } from './components/order-register/order-register.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { AddCashComponent } from './components/add-cash/add-cash.component';
import { FormsModule } from '@angular/forms';
import { SelectOrderComponent } from './components/select-order/select-order.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderListComponent } from './order-list/order-list.component';
import { CloseRegisterComponent } from './pages/close-register/close-register.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    OpenRegisterComponent,
    OrderListComponent,
    HomeComponent,
    OrdersSlipComponent,
    OrderRegisterComponent,
    CreateOrderComponent,
    AddCashComponent,
    SelectOrderComponent,
    CloseRegisterComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule,
    NgbModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
