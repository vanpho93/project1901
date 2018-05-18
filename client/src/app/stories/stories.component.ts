import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Story } from '../types';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories: Story[];
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('stories').subscribe(stories => this.stories = stories);
  }

}
