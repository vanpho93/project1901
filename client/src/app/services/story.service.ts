import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../types';
import { RequestService } from './request.service';

@Injectable()

export class StoryService {
    constructor(
        private store: Store<AppState>,
        private request: RequestService
    ) {}

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
}
