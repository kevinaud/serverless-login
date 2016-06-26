import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { UserService } from './../user/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class NavbarComponent implements OnInit {

    router: Router;
    userService: UserService;
    isLoggedIn: boolean;

    constructor(router: Router, userService: UserService){
        this.router = router;
        this.userService = userService;
        
    }    

    ngOnInit(){

        this.isLoggedIn = this.userService.isLoggedIn();

        this.userService.loginStatus().subscribe(value => {
            this.isLoggedIn = value;
        })        

    }

}