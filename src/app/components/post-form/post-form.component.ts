import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEditState: boolean;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      console.log('success');
      this.postService.savePost({title, body} as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEditState = false;
      this.updatedPost.emit(post);

    });
  }
}
