import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    products = [
        { creator: "Agatha Cristie", title: "The Lovely Bones", price: 19.99, imageUrl: "https://m.media-amazon.com/images/I/81MNGKljivL._SL1500_.jpg", quantity: 1 }
    ]

    constructor(private router: Router) { }

    ngOnInit(): void {
        let cart = localStorage.getItem('cart');
        if(cart != null){
            this.products = JSON.parse(cart);
        }
    }

    sum(): number {
        if(this.products.length==0){
            return 0;
        }
        let ret = this.products.map(product => product.price * product.quantity).reduce((prev, curr) => prev + curr);
        console.log(ret)
        return ret;
    }

    checkout(): void {
        this.router.navigate(['/checkout']);
    }

    delete(product: any): void{
        for(let i=0; i<this.products.length; i++){
            if(this.products[i].title == product.title){
                this.products.splice(i, 1);
                localStorage.setItem('cart', JSON.stringify(this.products));
                break;
            }
        }
    }

    increment(index: number, value: number) : void{
        this.products[index].quantity = this.products[index].quantity+value;
        if(this.products[index].quantity == 0){
            this.products.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(this.products));
    }



}