import {Component, OnDestroy, OnInit} from '@angular/core';
import {Fade, Post} from '../../core';
import {Subject} from 'rxjs';
import {IAppState} from '../../core/store/state/app.state';
import {select, Store} from '@ngrx/store';
import {selectPostsList} from '../../core/store/selectors/posts.selector';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  animations: [Fade]
})
export class PostsListComponent implements OnInit, OnDestroy {

  destroyed$ = new Subject();

  posts$ = this.store.pipe(select(selectPostsList));

  posts: Post[] = [];

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.getPosts();
  }


  getPosts(): void {
    // subscribing to post state observable
    this.posts$
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
