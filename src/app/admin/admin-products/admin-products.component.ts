import { Component } from '@angular/core';
import { AddProductService } from 'src/app/servicios/addproducts.service';
import { RequestService } from 'src/app/servicios/request.service';
import type { Product } from 'src/types';
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { OrdersServiceService } from 'src/app/servicios/orders.service.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  constructor(
    private requestService: RequestService,
    public AddProductService: AddProductService,
    public ordersServiceService:OrdersServiceService
  ) {
    this.getProducts()
  }

  products: Array<Product> = []
  filteredProducts: Array<Product> = []
  modalSwitch: Boolean = false
  date: any = new Date();

  getProducts(): void {
    const token = localStorage.getItem('accessToken');
    this.requestService.getProductsRequest(token).subscribe({
      next: (response) => {
        console.log('estos son los productos', response)
        this.products = response
        this.filteredProducts = response

      }
    })
  }
  formatPrice(price: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  }

  filterByFoodType(type: string) {
    if (type === "all") {
      this.filteredProducts = this.products
      return
    }
    const productBreakfast = this.products.filter((product) => product.type === type)
    this.filteredProducts = productBreakfast
  }
  addProducts(name: Product) {
    this.AddProductService.add(name);
    console.log('adding', this.products)
  }

  deleteProducts(id: number) {
    const token = localStorage.getItem('accessToken');
    this.requestService.deletePost(id, token)
      .subscribe(response => {
        console.log('producto eliminado:', response)
      });
  }
  showModal(id: number) {
    this.modalSwitch = true
    console.log('editando')
  }

  updateData(value: any, id: number) {
    const PRODUCTS: Product = {
      name: value.name,
      price: value.price,
      type: value.type,
      dateEntry: this.date,
      id: id,
      image: value.image
    }

    this.ordersServiceService.updateProductService(id, PRODUCTS)
      .subscribe(respuesta => {
        console.log('Aqui', respuesta)
      })
  }

}

