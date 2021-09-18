import {Component, OnInit} from '@angular/core';
import {IAppState} from './core/store/state/app.state';
import {Store} from '@ngrx/store';
import {PostService} from './core';
import {take} from 'rxjs/operators';
import {getPostsList} from './core/store/actions/posts.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'osaja-posts';

  constructor(private store: Store<IAppState>,
              private postService: PostService) {
  }


  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .pipe(take(1))
      .subscribe(res => {
        this.store.dispatch(getPostsList(res));
      });
  }
}
