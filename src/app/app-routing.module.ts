import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './modules/admin/admin.module';
import { PrototypeComponent } from './prototype/prototype.component';


const routes: Routes = [
  {
    path: 'checkout',
    loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule)
  },
  { 
    path: 'prototype',
    component: PrototypeComponent
  },
  {
    path: '',
    redirectTo: '/prototype', pathMatch: 'full'
  },
  {
    path: 'costumer',
    loadChildren: () => import('./modules/costumer/costumer.module').then(m => m.CostumerModule)
  },
  {
    path: 'waiter',
    loadChildren: () => import('./modules/waiter/waiter.module').then(m => m.WaiterModule)
  },
  {
    path: 'checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
