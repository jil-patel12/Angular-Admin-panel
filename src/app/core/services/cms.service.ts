import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CMS } from 'src/app/core/models/cms';

@Injectable({ providedIn: 'root' })
export class CMSService {

    constructor(private http: HttpClient) { }
    
    getCMS() {
        return this.http.get<any>('assets/cms.json')
            .toPromise()
            .then(res => <CMS[]>res.data)
            .then(data => { return data; });
    }

}