import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterRoutingModule } from './waiter-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderAddonsComponent } from './components/order-addons/order-addons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TotalComponent } from './components/total/total.component';
import { SharedModule } from '../../shared/shared.module';
import { OrderTicketsComponent } from './pages/order-tickets/order-tickets.component';
import { MenuNavbarComponent } from './components/menu-navbar/menu-navbar.component';
import { AddonObservationComponent } from './components/addon-observation/addon-observation.component';
import { LoginWaiterComponent } from './pages/login-waiter/login-waiter.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    OrderDetailsComponent,
    OrderAddonsComponent,
    TotalComponent,
    NavbarComponent,
    OrderTicketsComponent,
    MenuNavbarComponent,
    AddonObservationComponent,
    LoginWaiterComponent,

  ],
  imports: [
    CommonModule,
    WaiterRoutingModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    OrderDetailsComponent,
    OrderAddonsComponent,
    TotalComponent,
    NavbarComponent,
  ]
})
export class WaiterModule { }
