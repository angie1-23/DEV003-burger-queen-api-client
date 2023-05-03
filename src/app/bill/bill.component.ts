import { Component } from '@angular/core';
import { AddProductService } from '../servicios/addproducts.service';
import { RequestService } from '../servicios/request.service';
import { Order, Product } from 'src/types';
import { CookieService } from 'ngx-cookie-service';
import * as Toastify from 'toastify-js';
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { OrdersServiceService } from '../servicios/orders.service.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
  providers: [CookieService]
})
export class BillComponent {
  constructor(
    public addProductService: AddProductService,
    private requestService: RequestService,
    private cookieService: CookieService,
    private ordersServiceService: OrdersServiceService,
  ) { }

  faTrash = faTrashAlt;
  faPlus = faPlus;
  faMinus = faMinus;
  date: Date = new Date();
  name: string = '';

  removeProductsTicket(productId: number) {
    this.addProductService.removeProductsTicket(productId);
  }

  totalPrice() {
    const total = this.addProductService.products.reduce((pv, cv) => {
      return pv = pv + cv.product.price * cv.quantity
    }, 0)
    return total
  }

  sendProducts() {
    this.date
    // const token = this.cookieService.get('accessToken');
    // const order = this.addProductService.products
    // this.requestService.createOrder(order, token).subscribe({
    //   next:(response) => {
    console.log(this.addProductService.products, this.date)
  }

  addnames() {
    // this.addProductService.addName(this.name);
    // this.name = ''; // clean the input 
  }

  increment() {
    this.addProductService.products.map((element) => element.quantity++)
  }
  decrement() {
    let productsNumber: any = 0;
    this.addProductService.products.forEach((element) => {
      if (element.quantity - 1 < 0) {
        // element.qty--
        return productsNumber;
      }
    })
  }
  public deleteProduct(): void {
    this.addProductService.products = this.addProductService.products.filter((product) => product.quantity > 0)
  }

  traerPedidos() {
    // const ticket= order 
    const ORDERS: Order = {
      userId: localStorage.getItem('userId') || "[]",
      client: this.name,
      products: this.addProductService.products,
      status: 'pending',
      dataEntry: this.date,
      total: this.totalPrice(),
    };
    this.ordersServiceService.postOrderService(ORDERS)
      .subscribe({
        next: (respuesta) => {
          console.log('Aqui', respuesta)
          Toastify({
            text: ('Order sent to kitchen'),
            duration: 10000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#77dd77",
            }
          }).showToast();
          this.addProductService.products = [];
          this.name = '';
        }
      })
  }
}
