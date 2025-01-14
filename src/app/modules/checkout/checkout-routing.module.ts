import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenRegisterComponent } from './pages/open-register/open-register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CloseRegisterComponent } from './pages/close-register/close-register.component';
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
        path: 'open-register',
        component: OpenRegisterComponent
      },
      {
        path: 'close-register',
        component: CloseRegisterComponent
      },
      {
        path: "home",
        component: HomeComponent
      }
    ]
  },
  {
      path: 'main',
      component: LoginComponent
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {

}
