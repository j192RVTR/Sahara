import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    { title: "1", imageUrl: "http://books.google.com/books/content?id=oui9DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", creator: "Lee Kravetz", price: 1999 },
    { title: "2", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781984882172_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Emma Stonex", price: 1999 },
    { title: "3", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593311295_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Kazuo Ishiguro", price: 1999 },
    { title: "Sisters of Night and Fog4", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250214416_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Ellen Alpsten", price: 1999 },
    { title: "Sisters of Night and Fog5", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
    { title: "Sisters of Night and Fog6", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
    { title: "Sisters of Night and Fog7", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
    { title: "Sisters of Night and Fog8", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
    { title: "Sisters of Night and Fog9", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
    { title: "Sisters of Night and Fog0", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
    { title: "Sisters of Night and Fog11", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
    { title: "Sisters of Night and Fog12", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
    { title: "Sisters of Night and Fog13", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
    { title: "Sisters of Night and Fog14", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
    { title: "Sisters of Night and Fog15", imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982134204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D", creator: "Erika Robuck", price: 1999 },
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
            subcategories:[
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
                name: "sci-fi",
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
            subcategories:[]
          }

        ]
      },
      {
        name: "video",
        value: false,
        subcategories:[
          {
            name: "movies",
            value: false,
            subcategories:[
              {
                name: "Popular",
                value: false
              },{
                name: "Kids",
                value: false
              },{
                name: "Family",
                value: false
              },{
                name: "Hard",
                value: false
              },
            ]
          },
          {
            name: "tv",
            value: false,
            subcategories:[
              {
                name: "United States",
                value: false
              },{
                name: "British",
                value: false
              },{
                name: "Korean",
                value: false
              },{
                name: "French",
                value: false
              },

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
            subcategories:[]
          },{
            name: "Rock",
            value: false,
            subcategories:[]
          },{
            name: "Blues",
            value: false,
            subcategories:[]
          },{
            name: "Country",
            value: false,
            subcategories:[]
          },

        ]
      }
    ]
  }

  bookGenres: string[] = ["Religion", "Manga", "Biography", "History", "Horror", "Mystery", "Romance", "Sci-Fi"];
  fictionGenres: string[] = ["Adventure", "Fantasy", "Classic", "Thrillers", "Mystery", "Horror"];
  nonfictionGenres: string[] = ["Art", "Cookbooks", "True Crime", "Garden", "Health"];
  tvGenres: string[] = ["USA", "British", "Korean", "French"];
  movieGenres = ["Popular", "Kids", "Family", "Hard"];
  musicGenres = ["Pop", "Rock", "Blue"];

  categoryfilters = {
    books: false,
    movies: false,
    music: false,
  }

  bookFilters = {
    religion: false,
    manga: false,
    biography: false,
    history: false,
    horror: false,
    mystery: false,
    romance: false,
    scifi: false,
    adventure: false,
    fantasy: false,
    classic: false,
    thriller: false,
    art: false,
    cooking: false,
    true_crime: false,
    garden: false,
    health: false,
  }

  tvFilters = {}
  movieFilters = {}
  musicFilters = {}

  country = "USA";
  ageRange = "Kids";
  popular = "";


  constructor() { }

  ngOnInit(): void {
  }

  makeArray(): any[] {
    return Array(Math.floor(this.products.length / 10) + 1).fill(1).map((element, index) => index + 1)
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
    window.scrollTo(0, 0);
  }

  search(): void{
    let exampleUrl = "";
    let restUrl = "restapi.com?";
    let prevKeys=false;
    exampleUrl += restUrl;
    if(this.keyword!=""){
      exampleUrl+="keyword=" + encodeURIComponent(this.keyword)
      prevKeys = true
    }
    if(this.author!=""){
      if(prevKeys){
        exampleUrl += "&"
      }
      exampleUrl+="author=" + encodeURIComponent(this.author)
      prevKeys = true

    }
    if(this.title!=""){
      if(prevKeys){
        exampleUrl += "&"
      }
      exampleUrl+="title=" + encodeURIComponent(this.title)
      prevKeys = true

    }
    if(this.description!=""){
      if(prevKeys){
        exampleUrl += "&"
      }
      exampleUrl+="description=" + encodeURIComponent(this.description)
      prevKeys = true
    }

    let filter_string = this.getFilterString();

    if(filter_string!=""){
      if(prevKeys){
        exampleUrl += "&"
      }
      exampleUrl+=filter_string;
    }



    this.set_keyword = this.keyword;
    console.log(exampleUrl)
  }

  getFilterString(): String{
    let ret = "";
    let prevKeys=false;
    for(let category of this.filters.categories){
      if(category.value){
        if(prevKeys){
          ret += "&"
        }
        ret+=category.name+"=true";
        prevKeys=true
        for(let subcategory of category.subcategories){
          if(subcategory.value){
            ret+="&"+subcategory.name+"=true";
            for(let subsubcategory of subcategory.subcategories){
              if(subsubcategory.value){
                ret+="&"+subsubcategory.name+"=true";
              }
            }
          }
        }
      }

    }
    return ret;
  }

}