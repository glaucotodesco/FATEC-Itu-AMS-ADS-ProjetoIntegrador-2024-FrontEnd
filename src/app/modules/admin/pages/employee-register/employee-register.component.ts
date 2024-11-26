import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service'; 
import { User } from '../../../../interfaces/user'; // Importando o modelo UserRequest

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

  constructor(private userService: UserService) {}

  // Método para enviar os dados do formulário para o backend
  onSubmit(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log('Usuário criado:', response);
        // Redirecionar ou mostrar uma mensagem de sucesso
      },
      (error) => {
        console.error('Erro ao criar usuário:', error);
      }
    );
  }
}
