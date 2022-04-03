import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    products = [
        { product: {creator: "Agatha Cristie", title: "The Lovely Bones", price: 19.99, imageUrl: "https://m.media-amazon.com/images/I/81MNGKljivL._SL1500_.jpg"}, quantity: 1 }
    ]

    constructor(private router: Router) { }

    ngOnInit(): void {
        let cart = localStorage.getItem('cart');
        if(cart != null){
            this.products = JSON.parse(cart);
        }
        else{
            this.products = [];
        }
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

    checkout(): void {
        this.router.navigate(['/checkout']);
    }

    delete(index: number): void{
        this.products.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.products));
    }

    increment(index: number, value: number) : void{
        this.products[index].quantity = this.products[index].quantity+value;
        if(this.products[index].quantity == 0){
            this.products.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(this.products));
    }



}