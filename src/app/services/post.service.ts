import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  updatePost(currentPost: Post): Observable<Post> {
    const url = `${this.postsUrl}/${currentPost.id}`;
    return this.http.put<Post>(url, currentPost, httpOptions);
  }

  deletePost(post: Post): Observable<{}> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.delete(url, httpOptions);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }
}
