import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  hide = true;
  passwordControl = new FormControl('');
  constructor(private router: Router) {}

  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
