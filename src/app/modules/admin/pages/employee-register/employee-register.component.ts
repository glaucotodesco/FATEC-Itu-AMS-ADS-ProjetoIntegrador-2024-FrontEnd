import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service'; 
import { User } from '../../../../interfaces/user'; // Importando o modelo UserRequest
import { Router } from '@angular/router'; // Importação do Router

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {
  user: User = {
    id: 1,
    name: '',
    login: '',
    password: '',
    profile: 'GARCOM',  // Valor padrão
  };

  constructor(private userService: UserService, private router: Router) {} // Injete o Router

  // Método para enviar os dados do formulário para o backend
  onSubmit(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log('Usuário criado:', response);

        // Redirecionar para a página de "employees" após sucesso
        this.router.navigate(['/admin/employees']);
      },
      (error) => {
        console.error('Erro ao criar usuário:', error);
      }
    );
  }
}
