import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Http } from '@angular/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    
})
export class LoginComponent implements OnInit {
    checked: boolean;
    name: string;
    password: string;
    error: string;

    showSpinner = false;
    constructor(public router: Router, private http: Http) {
    }


    ngOnInit() {
    }


    login(){}

    onLoggedin() {
   //  
   this.showSpinner = true;
console.log("login")


    }

}
