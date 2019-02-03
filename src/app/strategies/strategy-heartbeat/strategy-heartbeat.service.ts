import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import { Setting } from './settings/settings';

@Injectable({
  providedIn: 'root'
})
export class StrategyHeartbeatService {

  constructor(private http: HttpClient) {

  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error('An error occurred: ', error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  getSettings() : Observable<Setting[]> {
    return this.http.get<Setting[]>(`/strategy-heartbeat/v1/settings`)
      .pipe(
        tap(_ => console.log('Got settings')),
        catchError(this.handleError('getSettings', []))
      );
  }

  saveSettings(body: any) : Observable<any> {

    return this.http.post(`/strategy-heartbeat/v1/settings`, body).pipe(
      tap(_ => console.log(`updated settings`)),
      catchError(this.handleError('saveSettings', []))
    )
  }
}
