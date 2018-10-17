import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      console.error('Login form is invalid');
      console.log(this.loginForm);
      return;
    }

    this.loading = true;
    console.log('Login data', this.f.username.value, this.f.password.value);

    this.authService.login(this.f.username.value, this.f.password.value).subscribe(result => {
      console.log('login-result', result);
      if (result) {
        this.router.navigate([this.returnUrl]);
      }
    });
  }

}
