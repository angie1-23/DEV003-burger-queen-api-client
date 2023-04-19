import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddProductService } from '../servicios/addproducts.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, OrdersProduct, Product, ProductsService } from 'src/types';
@Injectable({
  providedIn: 'root'
})
export class OrdersServiceService {

  constructor(private http: HttpClient) { } // servicio que conecta con la API

  url: string = 'http://localhost:8080/orders';


  // api_key = sessionStorage.setItem("token", "accesstoken");
  accessToken = localStorage.getItem('accessToken');
  // accessToken =  this.cookieService.get('accessToken');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    })
  };

  //metodos para traer informacion
  getOrderService(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url, this.httpOptions);
  }

  postOrderService(products: Order): Observable<Order> {
    return this.http.post<Order>(this.url, products, this.httpOptions);
  }

  updateOrders(id: number, products: Order):Observable<Order> {
    const urlPatch = `${this.url}/${id}`;   // PATCH api/heroes/42
    return this.http.patch<Order>(urlPatch, products, this.httpOptions);
  }


}
