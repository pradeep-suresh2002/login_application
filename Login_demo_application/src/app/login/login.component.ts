import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = true;
  passwordControl = new FormControl('');
  constructor(
    private router : Router
  ){

  }

  signUp() : void{
    console.log("In signup")
    this.router.navigate(['/signup'])
  }

}
