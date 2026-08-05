import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';
import { AuthState } from '../../../core/auth/auth';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private auth: Auth, private router: Router, private authState: AuthState) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe({next:(response: any) => {
      console.log(response);
      const token = response.token;
      const user = response.data;

      this.authState.login(token, user);      
      this.router.navigate(['/dashboard']);
    }, error: (error) => {
      console.error(error);
    }, complete: () => {
      console.log('Login complete');
    }});
  }
}
