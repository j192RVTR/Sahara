import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    countries = ['USA', 'China', 'UAE', 'Japan']

    userModel: User = { email: '', password: '', name: '' }

    errorMsg = "";

    constructor(private service: UserServiceService, private router: Router) { }

    ngOnInit(): void {
    }

    onFormSubmit() {
        this.service.registerUser(this.userModel).subscribe(response => {

            localStorage.setItem("user", JSON.stringify(response));
            this.service.login();
            this.router.navigate(['']);
        }, error => {
            this.errorMsg = error.error.message;
        })
    }
}
