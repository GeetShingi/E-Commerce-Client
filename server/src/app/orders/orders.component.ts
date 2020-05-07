import { Component, OnInit, Inject } from '@angular/core';
import { OrderService } from '../services/orderservice.service';
import { Orders } from '../shared/order';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order: Orders;
  carts: any[];
  constructor(private orderservice: OrderService,@Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.orderservice.getOrder()
    .subscribe(order => {
      this.order = order;
      this.carts = order.orders;
      console.log(this.carts);
    })
  }

}
