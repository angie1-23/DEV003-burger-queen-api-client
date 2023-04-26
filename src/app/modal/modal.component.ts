import { Component,OnInit} from '@angular/core';
import { AddProductService  } from '../servicios/addproducts.service';
import { RequestService } from 'src/app/servicios/request.service';
import type { Product } from 'src/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{
  products: Array<Product> = []
  filteredProducts: Array<Product> = []

  constructor(
    public AddProductService : AddProductService,
    private requestService: RequestService,
  ){}


  getProducts(): void {
    const token = localStorage.getItem('accessToken');
    this.requestService.getProductsRequest(token).subscribe({
      next: (response) => {
        console.log('estos son los productos', response)
        this.products = response
      }
    })
  }

  filterByFoodType(type: string) {
    if (type === "all") {
      this.filteredProducts = this.products
      return
    }
    const productBreakfast = this.products.filter((product) => product.type === type)
    this.filteredProducts = productBreakfast
  }

  



}
