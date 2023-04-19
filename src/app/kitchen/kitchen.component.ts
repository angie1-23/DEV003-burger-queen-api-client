import { Component } from '@angular/core';
import { OrdersServiceService } from '../servicios/orders.service.service';
import { Order } from 'src/types';
import { AddProductService } from '../servicios/addproducts.service';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {

  public listaOr: Order[]=[]
  newPrducts = this.listaOr;
  // dataChange: any = new Date();
  date: Date = new Date();
  // time= Math.round(((<any>new Date(this.dataChange).getTime()-(this. newPrducts).getTime()) /(1000*60))*100)/100;

  constructor(
    private ordersServiceService:OrdersServiceService,
    public AddProductService : AddProductService
  ){}
  ngOnInit():void{
    this.cargarPedidos()
  }
  cargarPedidos(){
    this.ordersServiceService.getOrderService()
    .subscribe(respuesta =>{
      this.listaOr =respuesta;
      console.log('Aqui',respuesta)
    })
  }

  updatePedidos(id: any, dateEntry: any) {
    // const ticket= order 

    const time = this.date
    let diaEnMils = 1000 * 60
    let days = time.getTime() - new Date(dateEntry).getTime();
    days = days / diaEnMils;
    const ORDERS: Order = {
      status: 'Delivered',
      dateProcessed: time,
      time: days
    };

    this.ordersServiceService.updateOrders(id,ORDERS)
      .subscribe(respuesta => {
        console.log('Aqui', respuesta)
      })
  }
  
}
