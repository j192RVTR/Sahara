import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "1", imageUrl: "http://books.google.com/books/content?id=oui9DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", creator: "Lee Kravetz", price: 19.99, id: 1 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "2", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781984882172_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Emma Stonex", price: 19.99, id: 2 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "3", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593311295_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Kazuo Ishiguro", price: 19.99, id: 2 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog4", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250214416_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Ellen Alpsten", price: 19.99, id: 2 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog5", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 3 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog6", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 4 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog7", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 5 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog8", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 6 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog9", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 7 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog0", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 8 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog11", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 9 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog12", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 10 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog13", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 11 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog14", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 12 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog15", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 13 },
  ];

  allProducts = [
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "1", imageUrl: "http://books.google.com/books/content?id=oui9DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", creator: "Lee Kravetz", price: 19.99, id: 1 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "2", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781984882172_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Emma Stonex", price: 19.99, id: 2 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "3", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593311295_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Kazuo Ishiguro", price: 19.99, id: 2 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog4", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250214416_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Ellen Alpsten", price: 19.99, id: 2 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog5", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 3 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog6", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 4 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog7", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 5 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog8", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 6 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog9", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 7 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog0", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 8 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog11", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 9 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog12", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 10 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog13", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 11 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog14", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 12 },
    { category: "Test", subcategory: "Test", subsubcategory: "Test", description: "Test", title: "Sisters of Night and Fog15", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 19.99, id: 13 },
  ];

  start = 0;
  finish = 12;
  page = 1;
  keyword = "";
  set_keyword = "";
  author = "";
  title = "";
  description = "";

  filters = {
    categories: [
      {
        name: "books",
        value: false,
        subcategories: [
          {
            name: "fiction",
            value: false,
            subcategories: [
              {
                name: "adventure",
                value: false
              },
              {
                name: "fantasy",
                value: false
              },
              {
                name: "classic",
                value: false
              },
              {
                name: "thriller",
                value: false
              },
              {
                name: "mystery",
                value: false
              },
              {
                name: "horror",
                value: false
              },
              {
                name: "romance",
                value: false
              },
              {
                name: "Science Fiction",
                value: false
              },

            ]
          },
          {
            name: "nonfiction",
            value: false,
            subcategories: [
              {
                name: "Religion",
                value: false
              },
              {
                name: "Biography",
                value: false
              },
              {
                name: "History",
                value: false
              },
              {
                name: "Art",
                value: false
              },
              {
                name: "True Crime",
                value: false
              },
              {
                name: "Cookbooks",
                value: false
              },
              {
                name: "Garden",
                value: false
              },
              {
                name: "Health",
                value: false
              }
            ]
          },
          {
            name: "Manga",
            value: false,
            subcategories: []
          }

        ]
      },
      {
        name: "video",
        value: false,
        subcategories: [
          {
            name: "movie",
            value: false,
            subcategories: [
              {
                name: "Action",
                value: false
              }, {
                name: "Comedy",
                value: false
              }, {
                name: "Documentary",
                value: false
              }, {
                name: "Family",
                value: false
              }, {
                name: "Horror",
                value: false
              }, {
                name: "Romance",
                value: false
              }, {
                name: "Thriller",
                value: false
              }, {
                name: "Western",
                value: false
              },
            ]
          },
          {
            name: "tv",
            value: false,
            subcategories: [
              {
                name: "Adventure",
                value: false
              }, {
                name: "Animation",
                value: false
              }, {
                name: "Comedy",
                value: false
              }, {
                name: "Drama",
                value: false
              }, {
                name: "Kids",
                value: false
              },{
                name: "Reality",
                value: false
              },{
                name: "Western",
                value: false
              }
            ]
          },
        ]
      },
      {
        name: "music",
        value: false,
        subcategories: [
          {
            name: "Pop",
            value: false,
            subcategories: []
          }, {
            name: "Rock",
            value: false,
            subcategories: []
          }, {
            name: "Blues",
            value: false,
            subcategories: []
          }, {
            name: "Country",
            value: false,
            subcategories: []
          },
          {
            name: "Disco",
            value: false,
            subcategories: []
          },

        ]
      }
    ]
  }

  indices: number[] = []

  addMsg = "";
  sortedBy = ""


  constructor(private service: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let specifier = this.route.snapshot.paramMap.get('spec')
    let query = this.route.snapshot.paramMap.get('string')
    if(specifier == "keyword"){
      if(query!=null){
        this.keyword = query
        this.set_keyword = query
      }
    }
    if(specifier == "genre"){
      if(query != null){
        let cats = query.split("_");
        console.log(cats)
        for (let i=0;i< this.filters.categories.length; i++) {
          let filter = this.filters.categories[i];
          if (cats[0].toLowerCase() ==filter.name.toLowerCase() ) {
            this.filters.categories[i].value = true
            if(cats.length < 2){
              break;
            }
            for (let j=0;j< filter.subcategories.length; j++) {
              let sf = filter.subcategories[j];
              if (cats[1].toLowerCase() == sf.name.toLowerCase()) {
                this.filters.categories[i].subcategories[j].value=true
                if(cats.length < 3){
                  break;
                }
                for (let k=0; k<sf.subcategories.length; k++) {
                  let ssf = sf.subcategories[k];
                  if(cats[2].toLowerCase() == ssf.name.toLowerCase()){
                   this.filters.categories[i].subcategories[j].subcategories[k].value=true;
                  }
                }
              }
            }
          }
        }
      }
    }
    this.service.getProducts().subscribe(response => {
      this.products = response;
      this.allProducts = response;
      this.search()
    })
  }

  makeArray(): any[] {
    if(this.products.length == 0){
      return [1];
    }
    return Array(Math.floor((this.products.length  -1) / 12) + 1).fill(1).map((element, index) => index + 1)
  }

  advancePage(value: number): void {
    this.page = value;
    this.start = (this.page - 1) * 12
    if (this.start < 0) {
      this.start = 0;
    }
    this.finish = this.page * 12;
    if (this.finish > this.products.length) {
      this.finish = this.products.length;
    }
    this.addMsg = "";

    window.scrollTo(0, 0);
  }

  search(): void {
    this.addMsg = "";
    let holder = this.allProducts;
    //this.products = this.allProducts
    // let exampleUrl = "";
    // let restUrl = "restapi.com?";
    // let prevKeys = false;
    // exampleUrl += restUrl;
    // if (this.keyword != "") {
    //   exampleUrl += "keyword=" + encodeURIComponent(this.keyword)
    //   prevKeys = true
    // }
    // if (this.author != "") {
    //   if (prevKeys) {
    //     exampleUrl += "&"
    //   }
    //   exampleUrl += "author=" + encodeURIComponent(this.author)
    //   prevKeys = true

    // }
    // if (this.title != "") {
    //   if (prevKeys) {
    //     exampleUrl += "&"
    //   }
    //   exampleUrl += "title=" + encodeURIComponent(this.title)
    //   prevKeys = true

    // }
    // if (this.description != "") {
    //   if (prevKeys) {
    //     exampleUrl += "&"
    //   }
    //   exampleUrl += "description=" + encodeURIComponent(this.description)
    //   prevKeys = true
    // }

    // let filter_string = this.getFilterString();

    // if (filter_string != "") {
    //   if (prevKeys) {
    //     exampleUrl += "&"
    //   }
    //   exampleUrl += filter_string;
    // }
    console.log(holder)
    console.log(this.title)
    if (this.title != "") {
      holder = holder.filter(product => product.title.toLowerCase().includes(this.title.toLowerCase()))

    }

    if(this.author != ""){
      holder = holder.filter(product => product.creator.toLowerCase().includes(this.author.toLowerCase()))
    }

    if(this.description != ""){
      holder = holder.filter(product => product.description.toLowerCase().includes(this.description.toLowerCase()))

    }

    if(this.keyword != ""){
      holder = holder.filter(product => product.title.toLowerCase().includes(this.keyword.toLowerCase())
        || product.creator.toLowerCase().includes(this.keyword.toLowerCase())
        || product.description.toLowerCase().includes(this.keyword.toLowerCase()))
    }

    let cats: string[] = []
    let sub_cat_paths: string[] = []
    let sub_sub_cat_paths: string[] = []

    for (let filter of this.filters.categories) {
      if (filter.value) {
        cats.push(filter.name.toLowerCase())
        for (let sf of filter.subcategories) {
          if (sf.value) {
            sub_cat_paths.push((filter.name + "_" + sf.name).toLowerCase())
            for (let ssf of sf.subcategories) {
              if(ssf.value){
              sub_sub_cat_paths.push((filter.name + "_" + sf.name + "_" + ssf.name).toLowerCase())
              }
            }
          }
        }
      }
    }
    console.log(cats)
    console.log(sub_cat_paths)
    console.log(sub_sub_cat_paths)

    if (cats.length != 0) {
      holder = holder.filter(product => cats.includes(product.category.toLowerCase()) )
    }

    if (sub_cat_paths.length != 0) {
      holder = holder.filter(product =>  sub_cat_paths.includes(product.category.toLowerCase() + "_" + product.subcategory.toLowerCase()) 
      || (sub_cat_paths.filter(path => path.includes(product.category)).length == 0) )
    }

    if (sub_sub_cat_paths.length != 0) {
      holder = holder.filter(product =>  sub_sub_cat_paths.includes(product.category.toLowerCase() + "_" + product.subcategory.toLowerCase() + "_" + product.subsubcategory.toLowerCase()) 
      || (sub_sub_cat_paths.filter(path => path.includes(product.category)).length == 0)
      || (sub_sub_cat_paths.filter(path => path.includes(product.subcategory)).length == 0))
    }

    if(this.sortedBy == "price"){
      holder.sort((productA, productB)=> productA.price - productB.price)
    }

    if(this.sortedBy == "title"){
      holder.sort((productA, productB) => {
        let a = productA.title.toLowerCase();
        let b = productB.title.toLowerCase();
        if(a>b){
          return 1;
        }
        if(a<b){
          return -1;
        }
        return 0;
      })
    }

    if(this.sortedBy == "creator"){
      holder.sort((productA, productB) => {
        let a = productA.creator.toLowerCase();
        let b = productB.creator.toLowerCase();
        if(a>b){
          return 1;
        }
        if(a<b){
          return -1;
        }
        return 0;
      })
    }

    this.set_keyword = this.keyword;
    this.products = holder;
     console.log(this.products)
     this.page = 1;
     this.start = 0;
     this.finish = 12;
     if(this.finish > this.products.length){
       this.finish = this.products.length;
     }
     console.log("Finish:" + this.finish)

     this.indices = this.makeArray();

  }

  getFilterString(): String {
    let ret = "";
    let prevKeys = false;
    for (let category of this.filters.categories) {
      if (category.value) {
        if (prevKeys) {
          ret += "&"
        }
        ret += category.name + "=true";
        prevKeys = true
        for (let subcategory of category.subcategories) {
          if (subcategory.value) {
            ret += "&" + subcategory.name + "=true";
            for (let subsubcategory of subcategory.subcategories) {
              if (subsubcategory.value) {
                ret += "&" + subsubcategory.name + "=true";
              }
            }
          }
        }
      }

    }
    return ret;
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
          quantity = temp[i].quantity
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
    if(quantity > 1){
      this.addMsg+=" (" + quantity + ")"
    }
    window.scrollTo(0, 0);
  }

}
