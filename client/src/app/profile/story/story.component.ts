import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Story } from '../../types';
import { CommentService } from '../../services/comment.service';
import { StoryService } from '../../services/story.service';
import { AppState } from '../../types';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  @Input() story: Story;
  txtComment = '';
  idUser = '';

  constructor(
    private commentService: CommentService,
    private storyService: StoryService,
    private store: Store<AppState>
  ) {
    this.store.select('user').select('_id').subscribe(idUser => this.idUser = idUser);
  }

  get liked(): boolean {
    return this.story.fans.some(fan => this.idUser === fan._id);
  }

  createComment() {
    this.commentService.createComment(this.story._id, this.txtComment);
    this.txtComment = '';
  }

  toggleLike() {
    if (!this.liked) {
      return this.storyService.likeStory(this.story._id);
    }
    this.storyService.dislikeStory(this.story._id);
  }

  likeComment(_id: string) {
    this.commentService.likeComment(_id);
  }
}
