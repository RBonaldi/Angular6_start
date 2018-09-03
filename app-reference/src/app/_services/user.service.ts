import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiURl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiURl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.apiURl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiURl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiURl}/users/` + id);
    }
}