import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../types';
import { RequestService } from './request.service';

@Injectable()

export class CommentService {
    constructor(
        private store: Store<AppState>,
        private request: RequestService
    ) {}

    createComment(idStory: string, content: string) {
        this.request.post('/comment', { content, idStory })
        .then(response => this.store.dispatch({
                type: 'CREATE_COMMENT',
                _id: idStory,
                comment: response.comment
        }))
        .catch(error => console.log(error));
    }
}
