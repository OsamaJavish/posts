import {Component, OnDestroy, OnInit} from '@angular/core';
import {Fade, Post, PostService} from '../../core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  animations: [Fade]
})
export class PostsListComponent implements OnInit, OnDestroy {

  destroyed$ = new Subject();

  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getPosts();
  }


  getPosts(): void {
    // subscribing to post state observable
    this.postService.postList
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => {
        this.posts = res;
      });
  }

  ngOnDestroy(): void {
    // unsubscribe from all subscriptions (on component destroy)
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
