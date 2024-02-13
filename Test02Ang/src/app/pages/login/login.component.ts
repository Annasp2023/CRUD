import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  credentials!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async register() {
    const user = await this.authService.register(this.credentials.value);

    if (user) {
      this.router.navigateByUrl('/viatges', { replaceUrl: true });
    } else {
      console.log('Registration failed, Please try again');
    }
  }
  async login() {
    const user = await this.authService.login(this.credentials.value);

    if (user) {
      this.router.navigateByUrl('/viatges', { replaceUrl: true });
    } else {
      console.log('login failed, please try again');
    }
  }
}
