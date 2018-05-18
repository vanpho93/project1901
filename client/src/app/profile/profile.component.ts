import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, User } from '../types';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: User = null;
  constructor(
    private store: Store<AppState>,
    private storyService: StoryService
  ) {}

  ngOnInit() {
    this.store.select('user').subscribe(user => this.user = user);
    this.storyService.getAllStory();
  }

}
