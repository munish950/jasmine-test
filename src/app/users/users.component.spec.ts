import { UsersComponent } from './users.component';
import { UsersService } from '../service/user.service';
import { of } from 'rxjs';

describe('UserComponent', () => {
    let component: UsersComponent;
    let service: UsersService;

    beforeEach(() => {
        component = new UsersComponent(null);
        service = new UsersService(null);
    });

    xit('Should set users property by retrieving data from server', () => {
        const users = [
            {id: 1, name: 'First'},
            {id: 2, name: 'Second'}
        ];
        spyOn(service, 'getUsers').and.callFake(() => of(users));

        component.ngOnInit();

        expect(component.users).toBe(users);

    });

    xit('Should call server to save new user', () => {
        const userObj = {
            id: 2,
            name: 'Test',
        };

        const addSpy = spyOn(service, 'addUser').and.callFake(() => {
            return of([]);
        });

        component.insertUser(userObj);
        expect(addSpy).toHaveBeenCalled();
    });
});
