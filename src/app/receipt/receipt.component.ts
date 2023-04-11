import { Component, Input,EventEmitter,Output  } from '@angular/core';
import { NamesService } from '../names.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
  @Input() dataEntrante:any;
  items = this.namesService.getItems()
  totalAmount:any;
  @Output() productRemoved = new EventEmitter();

  constructor(
    private namesService: NamesService
  ) { }

  // items=this.namesService.getItems()
  removeItemFromCart(productId:any) {
    this.namesService.removeProductFromCart(productId);
  }
  // sumaProductFromTicket(){
  //   this.totalAmount= this.namesService.sumaProductFromTicket()
  //   //  
  // }
  ngOnInit() {
    this.namesService.getItems()
      this.totalAmount = this.namesService.sumaProductFromTicket();
  }
}
