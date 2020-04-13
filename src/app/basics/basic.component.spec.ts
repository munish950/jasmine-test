import { BasicComponent } from './basic.component';

describe('basicCompoent', () => {
    const basicomponent = new BasicComponent;

    it('Welcome Note', () => {
        const greetingMessage = basicomponent.greeting('ngTest');
        expect(greetingMessage).toContain('ngTest');
    });

    it('Should contain luxury cars', () => {
        const carList = basicomponent.getLuxuryCars();
        expect(carList).toContain('BMW');
        expect(carList).toContain('Lexus');
    });

    describe('vote count block', () => {
        beforeEach(() => {
            basicomponent.voteCount = 0;
        });

        it('Should increment vote count to 1', () => {
            const upVote = basicomponent.getUpVote();
            expect(upVote).toEqual(1);
        });

        it('Should decrement vote count to -1', () => {
            const downVote = basicomponent.getDownVote();
            expect(downVote).toEqual(-1);
        });
    });

});
