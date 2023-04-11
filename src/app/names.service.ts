// servicio es una instancia de una clase que puede poner a disposicion de cualquier parte de la aplicacion 
//utilizando 
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import {Product} from './interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor() { }
// Propiedad de array de strings en un array vacio
  items:Product[] = [];
  suma:number=0;

  addToCart(product: Product) {
    this.items.push(product);
      }

  getItems() {
    return this.items;
  }
  removeProductFromCart( productId:any) {
    this.items.map((item, index) => {
      if (item.id === productId) {
        this.items.splice(index, 1);
      }
    });
  }

  // sumaProductFromTicket() {
  //   this.items.map((item) => {
  //      this.suma= this.items.reduce((suma:number , b:Product) =>b.price, 0)
      
  //   });
  //   return this.suma;
  // }
  sumaProductFromTicket() {
    let total = 0;

    this.items.map((item) => {
      total += item.price;
    });

    return total;
  }
}