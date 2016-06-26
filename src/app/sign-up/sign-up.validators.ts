import {Control, ControlGroup} from '@angular/common';

export class SignUpValidators {

    static validEmailFormat(control: Control){

        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(regex.test(control.value) === true){
            return null;
        } else {
            return {
                validEmailFormat: true
            }
        }

    }
    
    static complexPassword(control: Control){
        
        var complexPassword = { 
            minLength: null,
            noNum: null,
            noLower: null,
            noUpper: null
        };
        
        const minLength = 5;
   
        if (control.value == '')
            return null; 
     
        if (control.value.length < minLength) {
            complexPassword.minLength = minLength;
        } else if (control.value.search(/\d/) == -1) {
            complexPassword.noNum = true;
        } else if (control.value.search(/[a-z]/) == -1) {
            complexPassword.noLower = true;
        } else if (control.value.search(/[A-Z]/) == -1) {
            complexPassword.noUpper = true;
        } else {
            /* No Errors */
            complexPassword = null;    
        }
        
        return complexPassword;
         
    }
    
    static passwordsShouldMatch(group: ControlGroup){
        var password = group.find('password').value;
        var confirmPassword = group.find('confirmPassword').value;
       
        if (password == '' || confirmPassword == '')
            return null;
        
        if (password != confirmPassword)
            return { passwordsShouldMatch: true };
            
        return null;
    }
    
}