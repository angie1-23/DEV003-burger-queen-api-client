import { Component,OnInit} from '@angular/core';
import { AddProductService  } from '../addproducts.service';
import { RequestService } from '../request.service';
import { Token } from '@angular/compiler';
import { Product } from 'src/types';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponentx {
  public newAarray:any;
  public totalAmmount:any;

  constructor(
    public addProductService: AddProductService,
    public requestService:RequestService
    
  ) { }

  removeProductsTicket(productId:any) {
    this.addProductService.removeProductsTicket(productId);
  }

  ngOnInit() {
  //   this.requestService.getProductsService().subscribe(data => {
  //     this.newAarray = data;
  //     console.log(this.newAarray )
  //     this.totalAmmount = this.addProductService.getTotalPrice();
  //   });
   }
  //  initialValue:number=0;

  //  getTotalPrice():void{
  //  const total = this.addProductService.products.reduce(
  //     (accumulator, initialValue ) => accumulator.price + currentValue
      
  //   );
  // }
  getTotalPrice(){
    return this.addProductService.products.reduce((accumalador, initialValue:any) => accumalador+=initialValue.price, 0)
  }

}

