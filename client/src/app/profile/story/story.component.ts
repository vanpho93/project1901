import { Component, Input } from '@angular/core';
import { Story } from '../../types';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  @Input() story: Story;
  txtComment = '';

  constructor(private commentService: CommentService) { }

  createComment() {
    this.commentService.createComment(this.story._id, this.txtComment);
    this.txtComment = '';
  }
}
