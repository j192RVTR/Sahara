import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:9000/products");
  }

  getProductById(id: any): Observable<any>{
    return this.http.get<any>("http://localhost:9000/products/" + id)
  }

  getRecentProducts(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9000/products/recent")
  }
}
