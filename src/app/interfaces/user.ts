
  export interface User {
    id: number;
    name: string;
    login: string;
    password: string;
    profile: 'ADMIN' | 'GARCOM' | 'CAIXA';
  }