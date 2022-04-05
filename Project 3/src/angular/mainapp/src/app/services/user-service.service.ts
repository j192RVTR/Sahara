import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { User } from '../classes/user';
import { MyError } from '../classes/error';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  _isLoggedInEvent: BehaviorSubject<boolean>;
  _isLoggedInObservable: Observable<boolean>;

  constructor(private http: HttpClient) {

    let currentUser = localStorage.getItem("user")
    if(currentUser != null){

      this._isLoggedInEvent = new BehaviorSubject<boolean>(!!JSON.parse(currentUser));
    }
    else{
      this._isLoggedInEvent = new BehaviorSubject<boolean>(false);
    }
    this._isLoggedInObservable = this._isLoggedInEvent.asObservable();

  }

  registerUser(user: User): Observable<any> {
    return this.http.post<User | MyError>("http://localhost:9000/users", user);
  }

  validateUser(user: User): Observable<any> {
    return this.http.post<User | MyError>("http://localhost:9000/users/validate", user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<User | MyError>("http://localhost:9000/users", user);
  }

  login(){
    this._isLoggedInEvent.next(true);
    this._isLoggedInObservable = this._isLoggedInEvent.asObservable();
  }

  logout(){
    this._isLoggedInEvent.next(false);
    this._isLoggedInObservable = this._isLoggedInEvent.asObservable();
    localStorage.clear()
  }

  isLoggedIn(): boolean{
    return localStorage.getItem("user") != null;
  }

  isLoggedInObservable(): Observable<boolean> {
    return this._isLoggedInObservable;
}

}
