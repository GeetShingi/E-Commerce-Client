import { Component, OnInit, Inject } from '@angular/core';
import { OrderService } from '../services/orderservice.service';
import { Orders } from '../shared/order';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {

  orders: Orders[];
  carts: any[];
  constructor(private orderservice: OrderService,@Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.orderservice.getOrders()
    .subscribe(order => {
      this.orders = order;
      console.log(this.orders);
    })
  }

}
