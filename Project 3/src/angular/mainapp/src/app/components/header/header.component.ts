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
  name = "Sign In";

  constructor(private router: Router, private service: UserServiceService) {
    this.service.isLoggedInObservable().subscribe((val: boolean) => {
      this.isLoggedIn = val;
      if(this.isLoggedIn){
        let temp = localStorage.getItem("user");
        if(temp != null){
          let json = JSON.parse(temp);
          this.name = json.name;
        }
      }
  });
   }

  ngOnInit(): void {
    
  }

  submit(): void{
    this.router.navigate(['/product/keyword/' + this.keyword]);
  }

  logout(): void{
    this.name = 'Sign In';
    this.service.logout();
    
  }

}
