import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error!: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authService.login(username, password).subscribe(
      data => {
        // login successful redirect to
      },
      error => {
        this.error = "Invalid username or password";
      }
    );
  }

}
