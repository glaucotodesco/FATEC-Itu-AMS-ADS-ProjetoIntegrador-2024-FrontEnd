import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenRegisterComponent } from './pages/open-register/open-register.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CloseRegisterComponent } from './pages/close-register/close-register.component';
import { OrderRegisterComponent } from './components/order-register/order-register.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'order-list',
        component: OrderListComponent
      },
      {
        path: 'close-register',
        component: CloseRegisterComponent
      },
      {
        path: 'order-register',
        component: OrderRegisterComponent
      },
      {
        path: "home",
        component: HomeComponent
      }
    ]
  },
  {
      path: 'main',
      component: OpenRegisterComponent
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {

}
