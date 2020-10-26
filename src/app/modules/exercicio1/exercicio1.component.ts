import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.scss']
})
export class Exercicio1Component implements OnInit {

  numero;
  numeros =[];
  numerosOrdenado=[];


  constructor() { }

  ngOnInit(): void {
  }


  ordenar(){
    this.numerosOrdenado = this.numeros.slice();

    this.numerosOrdenado =  this.numerosOrdenado.sort(function(a, b){return a-b});
    
    
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    
   
    this.numerosOrdenado =  this.numerosOrdenado.filter(onlyUnique);
    
    console.log( this.numerosOrdenado); 
  
  }

  adcionar()
  {
    this.numeros.push(this.numero); 
  }

  limpar()
  {
    this.numeros = []; 
    this.numerosOrdenado=[];
  }
  
}
