import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../types';
import { RequestService } from './request.service';

@Injectable()

export class StoryService {
    idUser: string;
    name: string;
    constructor(
        private store: Store<AppState>,
        private request: RequestService
    ) {
        this.store.select('user').select('_id').subscribe(idUser => this.idUser = idUser);
        this.store.select('user').select('name').subscribe(name => this.name = name);
    }

    getAllStory() {
        this.request.get('/story')
        .then(response => {
            console.log(response);
            this.store.dispatch({ type: 'SET_STORIES', stories: response.stories });
        })
        .catch(error => console.log(error));
    }

    createStory(content: string) {
        this.request.post('/story', { content })
        .then(response => {
            this.store.dispatch({ type: 'CREATE_STORY', story: response.story });
        })
        .catch(error => console.log(error));
    }

    likeStory(_id: string) {
        this.request.post('/story/like/' + _id, null)
        .then(response => {
            this.store.dispatch({
                _id,
                type: 'LIKE_STORY',
                user: { _id: this.idUser, name: this.name }
            });
        })
        .catch(error => console.log(error));
    }

    dislikeStory(_id: string) {
        this.request.post('/story/dislike/' + _id, null)
        .then(response => {
            this.store.dispatch({
                _id,
                type: 'DISLIKE_STORY',
                idUser: this.idUser
            });
        })
        .catch(error => console.log(error));
    }
}
