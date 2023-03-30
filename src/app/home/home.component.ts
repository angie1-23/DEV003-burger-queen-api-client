import { Component } from '@angular/core';
import { faBurger, faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faBurger = faBurger;
  faCoffee = faCoffee;
  nombre: string = 'Juan';
  apellido:string= 'Perez';
  Pedido: number=   1;
  mensaje= 'Que deseas comer';
  mostrar= false
  nombreCliente= '';
 

  ProductosDesayuno(){
    this.mostrar = true;
    this.mensaje= 'Products Breakfast ' 
  }
  ProductosLunchDinner(){
    this.mostrar = true;
    this.mensaje= 'Products Lunch/Dinner'}

  capturarNombre(event:Event){
    console.log('Aqui')
    this.nombreCliente= (<HTMLInputElement>event.target).value
  }

}
