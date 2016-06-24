import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class NavbarComponent implements OnInit {

    router;
    loggedIn: boolean;

    constructor(router: Router){
        this.router = router;
    }    

    ngOnInit(){
        this.loggedIn = false;
    }

}