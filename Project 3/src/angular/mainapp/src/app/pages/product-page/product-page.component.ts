import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  addMsg = "";

  product : Product = {
    title: "Sisters of Night and Fog",
    imageUrl: "",
    creator: "Erika Robuck",
    price: 19.99,
    id: 3,
    category: "book",
    subcategory: "thing",
    subsubcategory: "thing",
    description: "1. St. James Infirmary\n2. You Don't Know My Mind\n3. Six Cold Feet\n4. Buddy Bolden's Blues\n5. Battle of Jericho\n6. After You've Gone\n7. Swanee River\n8. The Whale Has Swallowed Me\n9. John Henry\n10. Police Dog Blues\n11. Tipitina\n12. Winin' Boy Blues\n13. They're Red Hot\n14. Baby, Please Make a Change\n15. Let Them Talk <a href=\"https://www.last.fm/music/Hugh+Laurie/Let+Them+Talk\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.",
    creationDate: "2022-03-11T05:00:00.000+00:00"
  }


  constructor(private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit(): void {
    let product_id = this.route.snapshot.paramMap.get('id')
    this.service.getProductById(product_id).subscribe(response => {
      this.product = response
    })
  }

  addToCart(product: any): void {
    let cart = localStorage.getItem("cart");
    let quantity = 1;

    if (cart != null) {

      let add = true;

      let temp: any[] = JSON.parse(cart);
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].product.title == product.title) {
          temp[i].quantity = temp[i].quantity + 1;
          quantity = temp[i].quantity;
          add = false;
          break;
        }
      }
      if (add) {
        let orderItem = { quantity: 1, product: product };
        temp.push(orderItem);
      }
      localStorage.setItem("cart", JSON.stringify(temp))
    }
    else {
      let orderItem = { quantity: 1, product: product };
      let temp = [orderItem];
      localStorage.setItem("cart", JSON.stringify(temp))
    }
    this.addMsg = product.title
    if (quantity > 1) {
      this.addMsg += " (" + quantity + ")"
    }
    window.scrollTo(0, 0);

  }

}
