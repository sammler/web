import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StrategyHeartbeatService {

  constructor(private http: HttpClient) {

  }

  getSettings() {
    return this.http.get(`/strategy-heartbeat/v1/settings`);
  }

  saveSettings() {



  }
}
