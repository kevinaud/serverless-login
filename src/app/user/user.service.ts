import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { NewUser } from './new-user';
import { Profile } from './../profile/profile';

@Injectable()
export class UserService implements OnInit {

    private loggedIn: boolean;
    private _loggedIn: Subject<boolean>;

    private currentUser: Profile;
    private _currentUser: Subject<Profile>;

    constructor() {

        this._loggedIn = <Subject<boolean>> new Subject();
        this._currentUser = <Subject<Profile>> new Subject();

        if(localStorage.getItem('loggedIn') !== null){
            this.loggedIn = (localStorage.getItem('loggedIn') === 'true');
        }
        else {
            this.loggedIn = false;
        }

        if(this.isLoggedIn()){
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }

    }

    ngOnInit(){      

        this._loggedIn.next(this.loggedIn);

        if(this.isLoggedIn()){
            this._currentUser.next(this.currentUser);
        }

    }

    signUp(newUser: NewUser, callback){

        if(localStorage.getItem('users') === null){
            localStorage.setItem('users', JSON.stringify([]));
        }

        var users = JSON.parse(localStorage.getItem('users'));

        var user = users.find(user => { return user.username === newUser.username });

        if(user != null){
            return callback('Username is taken', null);
        }

        user = users.find(user => { return user.email === newUser.email });

        if(user != null){
            return callback('An account is already associated with that email address', null);
        }

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users)); 
        console.log(JSON.parse(localStorage.getItem('users')));

        return callback(null, 'Sign up successful!')
    }

    isLoggedIn(){
        return this.loggedIn;
    }

    loginStatus(){
        return this._loggedIn.asObservable();
    }

    login(credentials, callback){

        var users = JSON.parse(localStorage.getItem('users'));

        var user = users.find(user => {
            return user.username === credentials.username;
        });

        if(!user){
            return callback('Username not found', null);
        }
        
        if(user.password !== credentials.password){
            return callback('incorrect password', null);
        }

        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));

        this.loggedIn = true;
        this.currentUser = user;
        this._loggedIn.next(this.loggedIn);

        return callback(null, this.currentUser);
    }

    logout(){
        this.loggedIn = false;
        localStorage.setItem('loggedIn', 'false'); 
        localStorage.setItem('currentUser', null);
        this._loggedIn.next(this.loggedIn);  
    }

    getCurrentUser(){
        if(this.isLoggedIn()){
            return(this.currentUser);
        }
    }

    currentUserStream(){
        return this._currentUser.asObservable();
    }

}
