import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Content } from 'src/app/core/models/content-management';

@Injectable({ providedIn: 'root' })
export class ContentService {

    constructor(private http: HttpClient) { }
    getContent() {
        return this.http.get<any>('assets/content.json')
            .toPromise()
            .then(res => <Content[]>res.data)
            .then(data => { return data; });
    }

}