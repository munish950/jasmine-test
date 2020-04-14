import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  voteCount =  0;

  constructor() { }

  ngOnInit() {
    // this.voteCount += 1;
  }

  upVote() {
    this.voteCount += 1;
  }

  downVote() {
    this.voteCount -= 1;
  }

}
