import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private JSON;

  constructor(
    public authService: AuthenticationService
  ) {
    this.JSON = JSON;
  }

  ngOnInit() {
  }

}
