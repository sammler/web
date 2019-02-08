import {Component, OnInit} from '@angular/core';

import {AuthenticationService} from '../../_services';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private JSON;
  public environment: any = environment;

  constructor(
    public authService: AuthenticationService
  ) {
    this.JSON = JSON;
  }

  ngOnInit() {
  }

}
