import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import type { LoginResponse, Product, ProductService} from '../../types'

const baseUrl = 'http://localhost:8080'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }
  

  loginRequest(value: object) {
    return this.http.post<LoginResponse>(`${baseUrl}/login`, value)
  }

  getProductsRequest(token: any) {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    })
    return this.http.get<Array<Product>>(`${baseUrl}/products`, { headers });
  }

  createNewProduct(token: string){
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    })
    return this.http.post<Array<Product>>(`${baseUrl}/products`, { headers });

  }
  
  deletePost(id:number,token: any){
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    })
    return this.http.delete<Product>(' http://localhost:8080/products'+'/'+id, {headers});
  }

  createOrder(token: string, body: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json'
      })
    }
    return this.http.post(`${baseUrl}/orders`, body, httpOptions)
  }

 
}
