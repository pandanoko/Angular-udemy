import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  logStatusChange(message: string) {
    console.log('A server status changed, new status: ' + message);
  }
}
