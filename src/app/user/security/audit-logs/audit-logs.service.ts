import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuditLogsService {

  constructor(private http: HttpClient) { }

  getAuditLogs(): Observable<any> {
    const apiUrl = '/audit-log-service/v1/audit-logs';
    return this.http.get(apiUrl)
      // .map(res => {
      //   console.log(res);
      // })
      .pipe(catchError(this.handleError<any[]>('getAuditLogs', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

