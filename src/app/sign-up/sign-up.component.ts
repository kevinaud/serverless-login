import { Component, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, FORM_DIRECTIVES, Validators, NgClass } from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { SignUpValidators } from './sign-up.validators';
import { UserService } from './../user/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.css'],
    directives: [ NgClass, FORM_DIRECTIVES, ROUTER_DIRECTIVES ]
})
export class SignUpComponent implements OnInit {

    activeTabIndex: number;
    infoForm: any = {
        controls: {
            username: { value: '' },
            email: { value: '' },
            password: { value: '' }
        },
        valueChanges: ''
    };

    formRef;

    userService: UserService;
    router;
    isLoggedIn: boolean;

    tabs = [
        {
            title: "Info",
            valid: false
        }
    ]

    error: string = '';
    success: string = '';

    constructor(private _fb: FormBuilder, userService: UserService, router: Router) {
        this.userService = userService;
        this.router = Router;
    }

    ngOnInit() {

        this.isLoggedIn = this.userService.isLoggedIn();

        this.userService.loginStatus().subscribe(value => {
            this.isLoggedIn = value;
        });

        this.activeTabIndex = 0;
        
        this.infoForm = this._fb.group({
            username: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                SignUpValidators.validEmailFormat
            ])],
            password: ['', Validators.compose([
                Validators.required,
                SignUpValidators.complexPassword  
            ])],
            confirmPassword: ['', Validators.required]
        }, { validator: SignUpValidators.passwordsShouldMatch })
        
        this.formRef = this.infoForm.valueChanges.subscribe(() => {
            this.tabs[0].valid = this.infoForm.valid;
        }) 

    }

    onSubmit(){

        this.userService.signUp({
            username: this.infoForm.controls.username.value,
            email: this.infoForm.controls.email.value,
            password: this.infoForm.controls.password.value
        }, (err, success) => {

            if(err){
                this.error = err;
            }
            else {
                this.success = success;
            }

        });

        /**
         * if(valid login info){
         *      redirect user to page
         * }
         * else {
         *      Say that login failed
         * }
         */
    }

}