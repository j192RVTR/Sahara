import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    products = [
        { creator: "Agatha Cristie", title: "The Lovely Bones", price: 19.99, quantity: 1 }
    ]

    constructor() { }

    ngOnInit(): void {
        let cart = localStorage.getItem('cart');
        console.log(cart);
        if(cart != null){
            this.products = JSON.parse(cart);
        }
        console.log(this.products)
    }

    sum(): number {
        if (this.products.length == 0) {
            return 0;
        }
        let ret = this.products.map(product => product.price * product.quantity).reduce((prev, curr) => prev + curr);
        console.log(ret)
        return ret;
    }

}