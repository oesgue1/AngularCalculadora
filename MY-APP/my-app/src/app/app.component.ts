import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  proyecto = 'CALCULADORA';
  descripcion = 'CALCULADORA CON LAS OPERACIONES BASICAS';
  operaciones = ['suma','resta','multiplicacion','division'];
  show:boolean = true;

  resultado=0;
  sumar (numero1, numero2){
    this.resultado = Number(numero1) + Number(numero2);
    console.log(this.resultado)
  }
  restar (numero1, numero2){
    this.resultado = Number(numero1) - Number(numero2);
    console.log(this.resultado)
  }
  multiplicar (numero1, numero2){
    this.resultado = Number(numero1) * Number(numero2);
    console.log(this.resultado)
  }
  dividir (numero1, numero2){
    this.resultado = Number(numero1) / Number(numero2);
    console.log(this.resultado)
  }
}