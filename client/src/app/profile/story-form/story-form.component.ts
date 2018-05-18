import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent {
  txtStory = '';
  constructor(private storyService: StoryService) { }

  createStory() {
    this.storyService.createStory(this.txtStory);
    this.txtStory = '';
  }

}
