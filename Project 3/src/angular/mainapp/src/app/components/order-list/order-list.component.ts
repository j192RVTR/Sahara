import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

    products = [
        {creator: "Agatha Cristie", title: "The Lovely Bones", price: 19.99}
    ]

  constructor() { }

  ngOnInit(): void {
  }

  sum(): number{
    let ret = this.products.map(product => product.price).reduce((prev, curr) => prev+curr);
    return ret;
}

}