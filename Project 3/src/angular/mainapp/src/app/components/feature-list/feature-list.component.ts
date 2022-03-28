import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {

  products = [
    {id: 1, title: "1", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780063139992_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Lee Kravetz"}
  ];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getRecentProducts().subscribe(response => {
      this.products = response
    })
  }

}
