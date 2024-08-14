import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private graphqlService: GraphqlService, private router: Router) {}

  login() {
    const LOGIN_QUERY = `
    query MyQuery($username: String!, $password: String!) {
      authenticateUser(password: $password , username: $username) {
        email
        username
      }
    }
    `;
    
    this.graphqlService.query(LOGIN_QUERY, { username: this.username, password: this.password })
      .subscribe({
        next: (response) => {
          const data = response.data;
          console.log(data);
          if (data && data.authenticateUser) {
            this.router.navigate(['/home']);
          } else {
            this.errorMessage = 'Incorrect credentials';
            this.username = '';
            this.password = '';
          }
        },
        error: (error) => {
          console.error('Login error', error);
          this.errorMessage = 'An error occurred. Please try again.';
          this.username = '';
          this.password = '';
        },
      });
  }

}
