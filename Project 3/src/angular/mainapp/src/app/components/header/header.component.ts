import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = "";

  isLoggedIn = false;

  constructor(private router: Router, private service: UserServiceService) {
    this.service.isLoggedInObservable().subscribe((val: boolean) => {
      this.isLoggedIn = val;
  });
   }

  ngOnInit(): void {
    
  }

  submit(): void{
    this.router.navigate(['/product/keyword/' + this.keyword]);
  }

  logout(): void{
    this.service.logout();
  }

}
