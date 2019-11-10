import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
    });
    matcher = new MyErrorStateMatcher();
    constructor() { 
    
    }

  ngOnInit() {
  }

  submitLoginForm(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
    else{
      console.warn(this.loginForm.value);
    }
  }
}


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}