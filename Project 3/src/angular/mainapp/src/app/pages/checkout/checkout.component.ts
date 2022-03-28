import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    products = [{product:
        { creator: "Agatha Cristie", title: "The Lovely Bones", price: 19.99, quantity: 1 }, quantity: 1}
    ]

    checkoutModel = {
        name: "",
        email: "",
        address: "",
        address2: "",
        country: "",
        state: "",
        zip: "",
        cardName: "",
        cardNumber: "",
        expirationDate: "",
        securityCode: "",
        productOrders: [{product:
            { creator: "Agatha Cristie", title: "The Lovely Bones", price: 19.99, quantity: 1 }, quantity: 1}
        ]
    }

    constructor(private service: OrderService, private router: Router) { }

    ngOnInit(): void {
        let cart = localStorage.getItem('cart');
        console.log(cart);
        if(cart != null){
            this.products = JSON.parse(cart);
        }
        console.log(this.products)
    }

    sum(): number {
        if(this.products.length==0){
            return 0;
        }
        let ret = this.products.map(product => product.product.price * product.quantity).reduce((prev, curr) => prev + curr);
        console.log(ret)
        return ret;
    }

    num_items(){
        if(this.products.length==0){
            return 0;
        }
        return this.products.map(product => product.quantity).reduce((prev, curr) => prev+curr);
    }

    checkout(){
        this.checkoutModel.productOrders = this.products;
        console.log(this.checkoutModel);
        let temp: any = localStorage.getItem("user");
        if(temp != null){
            let user_id = JSON.parse(temp).id
            if(user_id != undefined){
                console.log("Here")
                this.service.submitOrderWithId(user_id, this.checkoutModel).subscribe(response => {
                    alert("Success")
                    localStorage.removeItem("cart");
                    this.router.navigate(['']);
                });
                return;
            }
        }
        this.service.submit(this.checkoutModel).subscribe(response => {
            alert("Success");
            localStorage.removeItem("cart");
            this.router.navigate(['']);

        });

    }

}