import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(downloadedPosts => {
      this.posts = downloadedPosts;
      console.log(this.posts);
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(cur);
      }
    });
    this.isEdit = false;
  }

  onDeletePost(post: Post) {
    this.postService.deletePost(post).subscribe(() => {
      this.posts.forEach((cur, index) => {
        if (cur.id === post.id) {
          this.posts.splice(index, 1);
        }
      });
    });
  }
}
