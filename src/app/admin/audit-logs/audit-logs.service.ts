import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditLogsService {

  constructor(private http: HttpClient) { }

  getAuditLogs(): Observable<any> {
    const apiUrl = '/audit-log-service/v1/audit-logs';
    return this.http.get(apiUrl)
      .pipe(catchError(this.handleError<any[]>('getAuditLogs', [])));
  }

  deleteAll(): Observable<any> {
    const apiUrl = '/audit-log-service/v1/audit-logs';
    return this.http.delete(apiUrl)
      .pipe(catchError(this.handleError<any[]>('deleteAll', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}

