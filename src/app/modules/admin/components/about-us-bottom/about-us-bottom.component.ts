import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-bottom',
  templateUrl: './about-us-bottom.component.html',
  styleUrl: './about-us-bottom.component.css'
})
export class AboutUsBottomComponent{


  constructor() { }

  data = [ 
    {id: 1, name: 'Almoço', dias_disponiveis: [
      {dia: 'D', status: false},
      {dia: 'S', status: true},
      {dia: 'T', status: true},
      {dia: 'Q', status: true},
      {dia: 'Q', status: true},
      {dia: 'S', status: true},
      {dia: 'S', status: false}
    ], 
    horario1: '12:00', 
    horario2: '15:00' 
  }, 
    
    {id: 2, name: 'Brunch', dias_disponiveis: [
      {dia: 'D', status: true},
      {dia: 'S', status: false},
      {dia: 'T', status: false},
      {dia: 'Q', status: false},
      {dia: 'Q', status: false},
      {dia: 'S', status: false},
      {dia: 'S', status: true}
    ],
    horario1: '12:15', 
    horario2: '15:00'
  },

    {id: 3, name: 'Jantar', dias_disponiveis: [
      {dia: 'D', status: false},
      {dia: 'S', status: false},
      {dia: 'T', status: true},
      {dia: 'Q', status: true},
      {dia: 'Q', status: true},
      {dia: 'S', status: true},
      {dia: 'S', status: true}
    ],
    horario1: '19:00', 
    horario2: '23:00'
  },
   
  ]

  contatos = [
    //TODO usar isto futuramente para cadsatro
    {id: 1, name: 'Facebook', link: 'https://www.facebook.com'},
    {id: 2, name: 'Instagram', link: 'https://www.instagram.com'},
    {id: 3, name: 'Linkedin', link: 'https://www.linkedin.com'},
    {id: 4, name: 'X / Twitter', link: 'https://www.twitter.com'},
    {id: 5, name: 'Email', link: 'info@restaurant.com'},
    {id: 6, name: 'Telefone', link: '123456789'}
    
  ]


  



 

}
