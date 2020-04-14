import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { By } from '@angular/platform-browser';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should increment vote count by 1', () => {
    component.voteCount = 2;
    component.upVote();
    // expect(component.ngOnInit()).toBe(3);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.vote_count'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('3');

  });

  xit('should decrement vote count by 1', () => {
    component.voteCount = 5;
    component.downVote();
    // expect(component.ngOnInit()).toBe(3);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.vote_count'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('4');

  });

  xit('should Change background color of VOTE SUCCESS', () => {
    component.voteCount = 10;
    component.upVote();
    // expect(component.ngOnInit()).toBe(3);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.vote_success'));
    const el: HTMLElement = de.nativeElement;

    expect(el).toBeTruthy();

  });

  it('Should increment vote count by 1 on Up Vote button click', () => {
    component.voteCount = 10;
    const button = fixture.debugElement.query(By.css('.up_vote_btn'));
    console.log(button);
    button.triggerEventHandler('click', null);

    // fixture.detectChanges();

    expect(component.voteCount).toBe(11);
  });

});
