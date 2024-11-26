import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-about-us-middle',
  templateUrl: './about-us-middle.component.html',
  styleUrl: './about-us-middle.component.css'
})
export class AboutUsMiddleComponent implements OnInit {

  data: any[] = [];
  cidades: any[] = [];
  bairro = '';
  logradouro = '';
  cidade = '';
  estado = '';

  cep = '';
  error = false;


  selectedUF: any;

  constructor() { }
  ngOnInit(): void {
    this.getUF();



  }


  getCEP() {
  
    fetch(`https://viacep.com.br/ws/${this.cep}/json/`, {
      method: 'GET'
    }).then(response => response.json()).then(data => {
      this.bairro = data.bairro;
      this.logradouro = data.logradouro;
      this.cidade = data.localidade;
      this.estado = data.uf;
      console.log();
      this.getCidade()
      this.error = false
     
    }).catch(error => this.error = true);
  }





  getUF() {

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/', {
      method: 'GET',
    }).then(response => response.json()).then(data => this.data = data);
  }

  getCidade() {

  

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.estado }/municipios`, {
      method: 'GET',
    }).then(response => response.json()).then(data => {
      this.cidades = data
      console.log(data);

    });


  }

}
