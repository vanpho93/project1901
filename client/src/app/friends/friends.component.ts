import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, People, UserInfo } from '../types';
import { FriendService } from '../services/friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  people: People;
  constructor(
    private store: Store<AppState>,
    private friendService: FriendService
  ) {
    this.store.select('people').subscribe(people => this.people = people);
  }

  ngOnInit() {
    this.friendService.getPeople();
  }

  addFriend(user: UserInfo) {
    this.friendService.addFriend(user);
  }
}
