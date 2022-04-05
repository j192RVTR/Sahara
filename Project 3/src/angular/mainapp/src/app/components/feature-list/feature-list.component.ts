import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {

  products: Product[] = []

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getRecentProducts().subscribe(response => {
      this.products = response
    })
  }

}
