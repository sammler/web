import {Component, OnInit} from '@angular/core';
import {AlertService, AuthenticationService} from '../../_services';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

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
    private authService: AuthenticationService,
    private alertService: AlertService
  ) {
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    // this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(e: Event) {

    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log('the loginForm is invalid');
      return false;
    }
    this.loading = true;
    e.preventDefault();

    return this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        result => {
          console.log('result', result);
          this.router.navigate([this.returnUrl]);
        }, error => {
          this.alertService.error(`We have a login error:  ${error}`);
          this.loading = false;
          console.error('We have a login error: ', error);
        });
  }
}
