import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRegisterComponent } from './pages/employee-register/employee-register.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    EmployeeRegisterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
