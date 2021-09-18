import {Component, OnInit} from '@angular/core';
import {PostService} from './core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'osaja-posts';

  constructor(
    private postService: PostService) {
  }


  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .pipe(take(1))
      .subscribe(res => {
        this.postService.setPostList(res);
      });
  }
}
