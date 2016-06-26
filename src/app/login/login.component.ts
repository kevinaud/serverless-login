import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

import { UserService } from './../user/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    directives: [ ]
})
export class LoginComponent implements OnInit {

    userService: UserService;
    router: Router;
    isLoggedIn: boolean;

    error: string = '';

    loginModel = {
        username: '',
        password: ''
    }

    constructor(userService: UserService, router: Router) {
        this.userService = userService;
        this.router = router;
    }

    ngOnInit() {

        this.isLoggedIn = this.userService.isLoggedIn();

        this.userService.loginStatus().subscribe(value => {
            this.isLoggedIn = value;
        }) 

    }

    onSubmit(){
        console.log('username', this.loginModel.username);
        console.log('password', this.loginModel.password);

        this.userService.login(this.loginModel, (err, success) => {

            if(err){
                this.error = err;
            }
            else {
                this.router.navigate(['/profile']);
            }

        });

        /**
         * if(valid login info){
         *      redirect user to profile page
         * }
         * else {
         *      Say that login failed
         * }
         */
    }

}
