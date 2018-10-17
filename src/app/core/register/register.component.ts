import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../_services';
import {first} from 'rxjs/operators';
import { Router } from '@angular/router';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private userService: UserService,
    private router: Router
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    let usr = new User('', '', this.f.username.value, this.f.password.value, '');

console.log('usr', usr);

    this.userService.register(usr)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

}
