import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class Login {
  form!: FormGroup;
  isLogin = true;
  hidePassword = true;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false]
    });
  }

  setMode(isLogin: boolean) {
    this.isLogin = isLogin;
    this.initForm();
  }

  toggleForm(event: Event) {
    event.preventDefault();
    this.isLogin = !this.isLogin;
    this.initForm();
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.form.invalid) return;

    if (!this.isLogin && this.form.value.password !== this.form.value.confirmPassword) {
      this.form.get('confirmPassword')?.setErrors({ mismatch: true });
      return;
    }

    console.log(this.isLogin ? 'Logging in:' : 'Registering:', this.form.value);
  }
}
 