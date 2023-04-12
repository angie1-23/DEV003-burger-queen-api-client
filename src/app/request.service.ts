import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import type { LoginResponse, Product } from '../types'

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  
  constructor(private http: HttpClient) {}
  accessToken = localStorage.getItem('accessToken');
  httpOptions = () => ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    }),
  });

  loginRequest(value: object) {
    return this.http.post<LoginResponse>('http://localhost:8080/login', value)
  }

  getProductsRequest(token: string) {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    })
    return this.http.get<Array<Product>>('http://localhost:8080/products', { headers });
  }

  getProductsService():Observable<Product[]>{
    console.log('Aquie productos',this.getProductsService())
    return this.http.get<Array<Product>>('http://localhost:8080/products', this.httpOptions());
   
  }
  
}
