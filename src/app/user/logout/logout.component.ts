import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
