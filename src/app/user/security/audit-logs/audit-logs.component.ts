import { Component, OnInit } from '@angular/core';
import {AuditLogsService} from './audit-logs.service';
import * as moment from 'moment';

@Component({
  selector: 'user-security-audit-logs',
  templateUrl: './audit-logs.component.html',
  styleUrls: ['./audit-logs.component.scss']
})
export class AuditLogsComponent implements OnInit {

  auditLogs: any[];

  constructor(private auditLogService: AuditLogsService) {
    this.moment = moment;
  }

  ngOnInit() {

    this.auditLogService.getAuditLogs()
      .subscribe(data => {
        console.log('audit-logs', data);
        this.auditLogs = data;
      })

  }

}
