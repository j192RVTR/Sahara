import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  submit(order: any): Observable<any[]>{
    return this.http.post<any[]>("http://localhost:9000/orders", order)
  }

  getOrder(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9000/orders")
  }

  getOrderById(id: number): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9000/orders/user/" + id);
  }

  submitOrderWithId(id: number, order: any): Observable<any[]>{
    console.log("and here!")
    return this.http.post<any[]>("http://localhost:9000/orders/user/" + id, order);
  }
}
