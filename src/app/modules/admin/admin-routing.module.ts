import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeRegisterComponent } from "./pages/employee-register/employee-register.component";

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}