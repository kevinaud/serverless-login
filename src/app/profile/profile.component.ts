import { Component, OnInit } from '@angular/core';

import { Profile } from './profile';

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile: Profile;

    constructor() {}

    ngOnInit() {

        this.profile = {
            username: "kevinaud",
            email: "kevinaud@gmail.com",
            dateOfBirth: "March 4, 1996"
        }

    }

}
