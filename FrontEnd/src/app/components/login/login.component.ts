import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {}

  error: boolean = false;

  form = new UntypedFormGroup({
    email: new UntypedFormControl(),
    password: new UntypedFormControl(),
  });

  entrar(): void {
    if (this.form.valid) {
      this.service
        .login(this.form.get('email')?.value, this.form.get('password')?.value)
        .subscribe({
          next: (response) => {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/home']);
          },
          error: () => {
            this.error = true;
          },
        });
    }
  }
}
