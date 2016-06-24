import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

import { NavbarComponent } from './navbar/navbar.component';

@RouteConfig([

    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/sign-up', name: 'SignUp', component: SignUpComponent },
    { path: '/profile', name: 'Profile', component: ProfileComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }

])
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
      ROUTER_PROVIDERS
    ]
})
export class AppComponent {
    title = 'title';
}
