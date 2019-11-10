import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,Validators, FormGroupDirective, NgForm, AbstractControl, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { match } from 'minimatch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  matchPasswords: ValidatorFn = (c: FormGroup) => {
    let password : string = c.get("password").value;
    let repeatPassword : string = c.get("password").value;
    if(password.match(repeatPassword)) return null;
    else return {noMatch: true}

  };
 
  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    name: new FormControl("",[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    repeatPassword: new FormControl('',[Validators.required]),
    registrationKey: new FormControl('',[Validators.required]),
  },[this.matchPasswords]);

  constructor() { }

  ngOnInit() {
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}