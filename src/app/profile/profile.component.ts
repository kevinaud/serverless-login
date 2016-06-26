import { Component, OnInit } from '@angular/core';

import { Profile } from './profile';
import { UserService } from './../user/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile: Profile;
    userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    ngOnInit() {

        this.profile = this.userService.getCurrentUser();

        this.userService.currentUserStream().subscribe(profile => {
            this.profile = profile;
        });

    }

}
