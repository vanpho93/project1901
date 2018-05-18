import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, User } from '../types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = null;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('user').subscribe(user => this.user = user);
  }

}
