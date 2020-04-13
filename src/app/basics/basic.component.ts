import { Component } from '@angular/core';

@Component({
    selector: 'app-basic',
    templateUrl: './basic.component.html',
    styles: [],
})
export class BasicComponent {
    voteCount = 0;
    constructor() {}

    greeting(welcomeText: string) {
        return `Welcome ${welcomeText}`;
    }

    getLuxuryCars() {
        return ['Maruti', 'Fiat', 'Lexus', 'BMW'];
    }

    getUpVote() {
        return this.voteCount += 1;
    }

    getDownVote() {
        return this.voteCount -= 1;
    }

}
