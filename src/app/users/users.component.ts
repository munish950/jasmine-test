import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/user.service';
import { User } from '../model/user.model';


@Component({
    selector: 'app-users'
})
export class UsersComponent implements OnInit {
    users: any[];
    constructor(private httpService: UsersService) {}

    ngOnInit() {
        this.httpService.getUsers()
            .subscribe(
                usersData => this.users = usersData
            );
    }

    insertUser(user: User) {
        this.httpService.addUser(user);
    }

}
