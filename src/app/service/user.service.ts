import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable()
export class UsersService {
    private usersUrl = 'http://test.com/users';

    constructor(private http: Http) {}

    getUsers() {
        return this.http.get(this.usersUrl).pipe(
            map(res => res.json())
        );
    }

    addUser(user: User) {
        return this.http.post(this.usersUrl, JSON.stringify(user)).pipe(
            map(res => res.json())
        );
    }

    deleteUser(userId) {
        return this.http.delete(this.usersUrl + '/' + userId).pipe(
            map(res => res.json())
        );
    }

}
