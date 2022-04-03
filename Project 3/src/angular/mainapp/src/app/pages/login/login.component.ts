import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: User = { email: '', password: '', name: '' }
  errorMsg = "";

  constructor(private service: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.service.validateUser(this.userModel).subscribe(response => {

        localStorage.setItem("user", JSON.stringify(response));
        this.service.login();
        this.router.navigate(['']);
    }, error => {
        this.errorMsg = error.error.message;
    })
}

}
