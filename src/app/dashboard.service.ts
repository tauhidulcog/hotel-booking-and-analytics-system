import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {SseClient} from 'ngx-sse-client';
import {delay, map, retryWhen} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export const sseNotificationUrl = '/notification-engine/sse/subscribe';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  message$ = new Subject<any>();

  constructor(private sseClient: SseClient, private http: HttpClient) {
  }

  getServerSentEventDashboad(): Observable<any> {
    const url2 = `http://localhost:3000/api/dashboard/stream`;
    const url = `http://localhost:3000/api/dashboard/status-counts`;
    

    return this.sseClient
      .stream(url, {keepAlive: true, reconnectionDelay: 1_000, responseType: 'event'})
      .pipe(
        map((response) => {
          console.log('RRR:-', response);
          if (response.type === 'error') {
            const errorEvent = response as ErrorEvent;
            return;
          } else if (response.type === 'CONNECTED') {
          } else {
            const notification = JSON.parse((response as MessageEvent)?.data);
            this.message$.next(notification);
            return notification;
          }
        }),
        retryWhen((errors) => {
          return errors.pipe(delay(15000));
        })
      );
  }

  // fact and felling are two diffrent question.

  getUser(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/dashboard');
  }


}
