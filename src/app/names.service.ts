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

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
