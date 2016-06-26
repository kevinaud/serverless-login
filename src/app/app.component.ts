import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './user/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.css'
    ],
    directives: [
        ROUTER_DIRECTIVES,
        NavbarComponent
    ],
    providers: [
      HTTP_PROVIDERS,
      UserService
    ]
})
export class AppComponent { }
