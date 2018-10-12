import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor() { }

  getLogs(): any {
    return LOGS;
  }

}

const LOGS = [
  { LogId: '1', message: 'foo bar baz 1'},
  { LogId: '2', message: 'foo bar baz 2'},
  { LogId: '3', message: 'foo bar baz 3'},
  { LogId: '4', message: 'foo bar baz 4'},
  { LogId: '5', message: 'foo bar baz 5'},
  { LogId: '6', message: 'foo bar baz 6'}
];
