import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/classes/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  name = "John Berger";

  orders: Order[] = []

  constructor(private service: OrderService, private route: Router) { }

  ngOnInit(): void {
    let temp = localStorage.getItem("user");
    if (temp != null) {
      this.name = JSON.parse(temp).name;
      let user_id = JSON.parse(temp).id;
      this.service.getOrderById(user_id).subscribe(response => {
        this.orders = response
      })
    }
    else{
      this.route.navigate(["login"]);
    }
  }

}
