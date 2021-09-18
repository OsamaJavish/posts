import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Post} from '../models';

@Injectable()
export class PostService {

  prefix = 'posts';


  private postListSubject = new BehaviorSubject<Post[]>([]);
  public postList = this.postListSubject.asObservable().pipe();

  constructor(private apiService: ApiService) {
  }



  setPostList(posts: Post[]): void {
    this.postListSubject.next(posts);
  }

  getPosts(): Observable<Post[]> {
    return this.apiService.get(`${this.prefix}`);
  }

  getPostById(postId: number): Observable<Post> {
    return this.apiService.get(`${this.prefix}/${postId}`);
  }

  addPost(requestBody: Post): Observable<any> {
    return this.apiService.post(`${this.prefix}`, requestBody);
  }

  updatePost(postId: number, requestBody: Post): Observable<any> {
    return this.apiService.put(`${this.prefix}/${postId}`, requestBody);
  }

  deletePost(postId: number): Observable<any> {
    return this.apiService.delete(`${this.prefix}/${postId}`);
  }


}
