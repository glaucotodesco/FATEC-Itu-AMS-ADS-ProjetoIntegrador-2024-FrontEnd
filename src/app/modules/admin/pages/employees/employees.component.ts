import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  // Arrays para armazenar os funcionários filtrados por perfil
  exampleWaiter: User[] = [];
  exampleCheckout: User[] = [];
  exampleManager: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  // Método para carregar todos os funcionários e filtrá-los
  loadEmployees(): void {
    this.userService.getUsers().subscribe(
      (response) => {
        this.filterEmployeesByProfile(response);
      },
      (error) => {
        console.error('Erro ao carregar funcionários:', error);
      }
    );
  }

  // Método para filtrar os funcionários por perfil
  filterEmployeesByProfile(employees: User[]): void {
    this.exampleWaiter = employees.filter(employee => employee.profile === 'GARCOM');
    this.exampleCheckout = employees.filter(employee => employee.profile === 'CAIXA');
    this.exampleManager = employees.filter(employee => employee.profile === 'ADMIN');
  }
}