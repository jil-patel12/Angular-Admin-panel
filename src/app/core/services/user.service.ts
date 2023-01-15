import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/auth.models';
import { UserManagement } from 'src/app/core/models/user-management';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/api/login`);
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    getUsers() {
        return this.http.get<any>('assets/users.json')
        .toPromise()
        .then(res => <UserManagement[]>res.data)
        .then(data => { return data; });
    }
}
