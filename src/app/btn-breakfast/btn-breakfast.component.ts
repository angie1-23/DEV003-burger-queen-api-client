import { Component } from '@angular/core';
import { Product, products } from '../interfaces/products';
import { NamesService } from '../names.service';

@Component({  
  selector: 'app-btn-breakfast',
  templateUrl: './btn-breakfast.component.html',
  styleUrls: ['./btn-breakfast.component.css']
})  
export class BtnBreakfastComponent {
  products = products;

  constructor(
    private namesService: NamesService
  ) { }

  addToCart(product: Product) {
    this.namesService.addToCart(product);

    // window.alert('Your product has been added to the cart!');
  }

  // clearCart(){
  //   this.namesService.clearCart();
  // }

  // share(){
  //   window.alert('The product has been shared!');
  //   console.log(this.products)
  // }
}
