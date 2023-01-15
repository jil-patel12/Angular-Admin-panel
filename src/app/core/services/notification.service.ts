import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Notification } from 'src/app/core/models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {

    constructor(private http: HttpClient) { }
    getNotification() {
        return this.http.get<any>('assets/notification.json')
            .toPromise()
            .then(res => <Notification[]>res.data)
            .then(data => { return data; });
    }

}