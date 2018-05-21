import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, UserInfo } from '../types';
import { RequestService } from './request.service';

@Injectable()

export class FriendService {
    idUser: string;
    constructor(
        private store: Store<AppState>,
        private request: RequestService
    ) {
        this.store.select('user').select('_id').subscribe(idUser => this.idUser = idUser);
    }

    getPeople() {
        return this.request.get('/friend')
        .then(response => this.store.dispatch({ type: 'SET_PEOPLE', people: response.people }))
        .catch(error => console.log(error));
    }

    addFriend(user: UserInfo) {
        this.request.post('/friend/request/' + user._id, null)
        .then(response => {
            this.store.dispatch({ type: 'ADD_FRIEND', user });
        })
        .catch(error => console.log(error));
    }
}
