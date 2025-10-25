import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Authentication} from '../services/authentication';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit{

  public formError: string = '';
  submitted = false;

  credentials = {
    name: '',
    email: '',
    password: '',
    rePassword: ''
  }

  constructor(
    private router: Router,
    private authentication: Authentication
  ) { }

  ngOnInit(): void {}

  public onRegisterSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password || !this.credentials.name || !this.credentials.rePassword) {
      this.formError = 'All fields are required, please try again';
      this.router.navigateByUrl('register'); // Return to sign up page
    } else if(this.credentials.password !== this.credentials.rePassword) {
      this.formError = 'Passwords must match, please try again';
      this.router.navigateByUrl('register'); // Return to sign up page
    } else {
      this.doRegister();
    }
  }

  private doRegister(): void {

    let newUser = {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;
  
    // console.log('RegisterComponent::doRegister');
    // console.log(this.credentials);
    this.authentication.register(newUser, this.credentials.password);

    if(this.authentication.isLoggedIn())
    {
      // console.log('Router::Direct');
      this.router.navigate(['']);
    } else {
      var timer = setTimeout(() => {
        if(this.authentication.isLoggedIn())
        {
          // console.log('Router::Pause');
          this.router.navigate(['']);
        }},3000);
    }
  }

}
