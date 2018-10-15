import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() {
  }

}


const STRATEGIES: any = [
  {
    'title': 'Heartbeat',
    'description': 'Just a very simple service to demonstrate the functionality of sammler.io.'
  },
  {
    'title': 'Twitter',
    'description': 'Track the history of your twitter activities.'
  },
  {
    'title': 'GitHub',
    'description': 'Track the history of your GitHub activities.'
  },
  {
    'title': 'LinkedIn',
    'description': 'Track the history of your LinkedIn activities'
  }
];
