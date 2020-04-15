import { UsersComponent } from './users.component';
import { UsersService } from '../service/user.service';
import { of } from 'rxjs';

describe('UserComponent', () => {
    let component: UsersComponent;
    // let service: UsersService;
    const service = jasmine.createSpyObj('HttpService', ['getUsers', 'addUser']);

    beforeEach(() => {
        component = new UsersComponent(service);
       // service = new UsersService(null);
    });

    it('Should set users property by retrieving data from server', () => {
        const users = [
            {id: 1, name: 'First'},
            {id: 2, name: 'Second'}
        ];

        service.getUsers.and.returnValue(of(users));

        // spyOn(service, 'getUsers').and.callFake(() => of(users));
       // spyOn(service, 'getUsers').and.returnValue(of(users));

        component.ngOnInit();

        expect(service.getUsers).toHaveBeenCalled();

        expect(component.users).toBe(users);

    });

    it('Should call server to save new user', () => {
        const userObj = {
            id: 2,
            name: 'Test',
        };
        // const service = jasmine.createSpyObj('HttpService', ['addUser']);
        /*
        const addSpy = spyOn(service, 'addUser').and.callFake(() => {
            return of([]);
        });
        */

        component.insertUser(userObj);

        expect(service.addUser).toHaveBeenCalled();
    });
});
